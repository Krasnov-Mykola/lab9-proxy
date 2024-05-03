import {createContext, useState, useEffect} from "react";

const TrafficLightsContext = createContext()

export const TrafficLightsProvider = ({children}) => {
    const [config, setConfig] = useState({
        red: {
          duration: 10000,
          backgroundColor: "red",
          count: 0,
          next: "green",
        },
        yellow: {
          duration: 1500,
          backgroundColor: "yellow",
          count: 0,
          next: "red",
        },
        green: {
          duration: 10000,
          backgroundColor: "green",
          count: 0,
          next: "yellow",
        }
      });

      const pedestrianConfig = {
        red: {
          duration: 10000,
          backgroundColor: "red",
          next: "green",
        },
        green: {
          duration: 10000,
          backgroundColor: "green",
          next: "red",
        },
      };

      const [layout, setLayout] = useState("vertical");
      const [activeColor, setActiveColor] = useState("gray");

      const [avtoLight, setAvtoLight] = useState("green");
      const [currentColor, setCurrentColor] = useState("red");
      const [isButtonDisabled, setIsButtonDisabled] = useState(false);

      useEffect(() => {
        fetchData();
      }, [])

      const handleLayoutChange = (newLayout) => {
        setLayout(newLayout);
      };

      const handlePedestrianLightChange = () => {
        if (avtoLight === "green") {
          setIsButtonDisabled(true);
          setTimeout(() => {
            setIsButtonDisabled(false);
          }, 10000);
          return;
        }
        if (currentColor === "red") {
          setCurrentColor("green");
          setAvtoLight("red")
        } else {
          setCurrentColor("red");
          setAvtoLight("green")
        }
        setIsButtonDisabled(false);
      };

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
        avtoLight,
        setAvtoLight,
        currentColor,
        setCurrentColor,
        handlePedestrianLightChange,
        isButtonDisabled,
        pedestrianConfig

    }}>
        {children}
    </TrafficLightsContext.Provider>
}

export default TrafficLightsContext