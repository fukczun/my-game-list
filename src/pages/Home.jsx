import { useAuth } from "../assets/AuthContext";

import Nav from '../components/Nav';
import Button from '../components/Button';
import Card from '../components/Card'
import InputSearch from '../components/InputSearch'
import ImgHeader from "../components/ImgHeader";
import ButtonSair from "../components/ButtonSair";

function Home() {
    const defaultArray = Array(5).fill("Nome do Jogo")

    const { isLoged, setIsLoged } = useAuth();

    const navNotLogged = [<Button label="CADASTRAR" redirect="/signup"/>, <Button label="ENTRAR" redirect="/login"/>]
    const navLogged = 
        [<ButtonSair set={setIsLoged}/>, 
        <a href="/profile"><img className="my-auto h-[max(4.157vh,1.50625rem)]  transition duration-300 ease-in-out transform hover:scale-110" src="./user.png" alt="Icon de Usuário" /></a>]

    return (
        <div>
            <header className="font-inter w-[max(100%,9.7rem)] h-[max(6.434vh,2.33675rem)] flex justify-between bg-dark-green">
                <ImgHeader />
                <Nav elements={isLoged ? navLogged : navNotLogged}/>
            </header>
            <main className="bg-home w-[max(100%,9.7rem)] h-[max(93.208vh,34rem)]">
                <section className="flex flex-col justify-center h-[47.506vh] min-h-[63%] gap-8 2xl:mb-5">
                    <a className="w-min mx-auto" href="/"><img className="w-[clamp(14rem,36.91445vw,40.0625rem)] min-w-[clamp(14rem,36.91445vw,40.0625rem)] mx-auto" src="./logo-big.png" alt="Logo Grande do My Game List Contraste" /></a>
                    <InputSearch/>
                </section>
                <aside className="flex max-sm:flex-col justify-around max-sm:items-center bg-dark-green w-full h-[29.704rem] max-lg:h-[76%] max-md:h-[75%] max-sm:h-[150vh] rounded-t-lg">
                    <Card subtitle="Top Avaliados" games={defaultArray}/>
                    <Card subtitle="Top Jogados" games={defaultArray}/>
                    <Card subtitle="Top Jogando" games={defaultArray}/>
                </aside>
            </main>
        </div>
    )
}
export default Home