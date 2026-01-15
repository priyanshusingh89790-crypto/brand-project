const About=()=>{
    return(
        <div>
            <button onClick={()=>
                document.getElementById("About").scrollIntoView({
                    behavior:"smooth",
                })
            }>About</button>
        </div>
    )
}
export default About