function Tradutor(callback){
    var txtParaTraduzir = document.getElementById("caixaDeTextoIn").value

    const palavraTraduzir = txtParaTraduzir.split("")
    let listagem =[]
    palavraTraduzir.forEach((letra) => {

        switch(letra.toLowerCase()){
            case "a":
                listagem.push(".-")
                break
            case "b":
                listagem.push("-...")
                break
            case "c":
                listagem.push("-.-.")
                break
            case "d":
                listagem.push("-..")
                break
            case "e":
                listagem.push(".")
                break
            case "f":
                listagem.push("..-.")
                break
            case "g":
                listagem.push("--.")
                break
            case "h":
                listagem.push("....")
                break
            case "i":
                listagem.push("..")
                break
            case "j":
                listagem.push(".---")
                break
            case "k":
                listagem.push("-.-")
                break
            case "l":
                listagem.push(".-..")
                break
            case "m":
                listagem.push("--")
                break
            case "n":
                listagem.push("-.")
                break
            case "o":
                listagem.push("---")
                break
            case "p":
                listagem.push(".--.")
                break
            case "q":
                listagem.push("--.-")
                break
            case "r":
                listagem.push(".-.")
                break
            case "s":
                listagem.push("...")
                break
            case "t":
                listagem.push("━...")
                break
            case "u":
                listagem.push("-")
                break
            case "v":
                listagem.push("...-")
                break
            case "w":
                listagem.push(".--")
                break
            case "x":
                listagem.push("-..-")
                break
            case "y":
                listagem.push("━...")
                break
            case "z":
                listagem.push("--..")
                break
            case "":
                listagem.push(" ")
                break    
            default:
                listagem.push("Você inseriu errado")
        }

        callback(listagem.join(" "))
    })


    
}

export default Tradutor