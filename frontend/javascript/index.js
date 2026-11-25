const getmethod = async(url)=>{
    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error("Hiba történt")
        }
        return await response.json()
    }
    catch(error){
        throw new Error("HIbaüzenet")
    }

}

document.addEventListener("DOMContentLoaded", async()=>{
    let getresponse = await getmethod("/api/kerdesek")

    let p1 = document.getElementsByTagName("p")[0]
    let p2 = document.getElementsByTagName("p")[1]
    let p3 = document.getElementsByTagName("p")[2]
    let p4 = document.getElementsByTagName("p")[3]
    let p5 = document.getElementsByTagName("p")[4]
    let p6 = document.getElementsByTagName("p")[5]
    let p7 = document.getElementsByTagName("p")[6]
    let p8 = document.getElementsByTagName("p")[7]
    let p9 = document.getElementsByTagName("p")[8]
    let p10 = document.getElementsByTagName("p")[9]
    let p11 = document.getElementsByTagName("p")[10]
    let p12 = document.getElementsByTagName("p")[11]
    let p13 = document.getElementsByTagName("p")[12]
    let p14 = document.getElementsByTagName("p")[13]
    let p15 = document.getElementsByTagName("p")[14]
    let p16 = document.getElementsByTagName("p")[15]
    let p17 = document.getElementsByTagName("p")[16]
    let p18 = document.getElementsByTagName("p")[17]
    let p19 = document.getElementsByTagName("p")[18]
    let p20 = document.getElementsByTagName("p")[19]

    p1.innerHTML = "Mi madagaszkar fovarosa"
    let madid = 0;
    for(let i = 0;i < getresponse.content.length; i++){
        if(getresponse.content[i].orszag == "MADAGASZKÁR"){
            madid = i
        }
    }
    p2.innerHTML = getresponse.content[madid].fovaros
    
})
