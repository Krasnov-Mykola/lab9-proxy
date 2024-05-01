import {createContext, useState, useEffect} from "react";

const TrafficLightsContext = createContext()

export const TrafficLightsProvider = ({children}) => {
    const [config, setConfig] = useState({
        red: {
          backgroundColor: "red",
          count: 0
        },
        yellow: {
          backgroundColor: "yellow",
          count: 0
        },
        green: {
          backgroundColor: "green",
          count: 0
        }
      });

      const [layout, setLayout] = useState("vertical");

      useEffect(() => {
        fetchData();
      }, [])

      const handleLayoutChange = (newLayout) => {
        setLayout(newLayout);
      };

      const [activeColor, setActiveColor] = useState("gray");

      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/config_new')
          const data = await response.json()
          setConfig(pre => {
            const tmp = {...pre }
            tmp.red.count = data[0].count
            tmp.yellow.count = data[1].count
            tmp.green.count = data[2].count

            return tmp
          })
        } catch (error) {
          console.log(error);
        }
      };

      const updateData = async (color) => {
        try {

          let id;

          if (color === 'red') {
            id = 1
          }
          if (color === 'yellow') {
            id = 2
          }
          if (color === 'green') {
            id = 3
          }
          
          const response = await fetch(`http://localhost:3000/config_new/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({color, count: config[color].count+1})
        })

        const data = await response.json()
        console.log('put',data)
        } catch (error) {
          console.log(error);
        }
      };

      const handleLightClick = (color) => {
        setConfig((prevCount) => ({
          ...prevCount,
          [color]:{ ...prevCount[color], count: prevCount[color].count + 1}
        }));
        setActiveColor(color);
        updateData(color);
      };

      
      
      
    return <TrafficLightsContext.Provider value={{
        config,
        setConfig,
        layout,
        setLayout,
        handleLayoutChange,
        activeColor,
        setActiveColor,
        handleLightClick,

    }}>
        {children}
    </TrafficLightsContext.Provider>
}

export default TrafficLightsContext