import { Logo } from "../../components/output/icons/Logo";


export function App(style : any) {

  return (
    <div style={{
        ...style,
        display : "grid",
        alignContent : "center",
        alignItems : "center",
        justifyContent : "center",
        justifyItems : "center",
        height : "100vh",
        width : "100vw",
        color : "#999999"
    }} className="App bg-black-500 gap-2">
        <div>
            <Logo style={{
                height : "80px"
            }}/>
        </div>
        <div className="text-2xl">
            Sorry, our site is down for maintenance. We'll be back shortly.
        </div>
    </div>  
  );
}

export default App;