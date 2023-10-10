export default function Titulo({ nome, paragrafo, cor }) {

    let nomezinho = "Gabs y Juh";
    const somatoria = 19 + 1;



    return (
        <>
            <h1>Oi eu sou um {nomezinho} e também posso ser um {nome ? nome : nome = "Coringa"}</h1>
            {paragrafo ?
                <p style={{color:cor}}>Lorem ipsum, dolor sit a
                    met consectetur adipisicing elit. Totam, culpa hic? Accusantium, earum . . . . .
                    {somatoria}

                </p>

                : <p style={{color:cor}} > Nadinha </p>}


        </>
    )
}