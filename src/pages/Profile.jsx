import React from "react";
import { useAuth } from "../assets/AuthContext";
import Nav from "../components/Nav";
import ImgHome from "../components/ImgHome";
import Button from "../components/Button";
import ButtonSair from "../components/ButtonSair";
import Button2 from "../components/Button2";
import SectionGame from "../components/SectionGame";

function Profile() {
    const { isLoged, setIsLoged } = useAuth();

    const navNotLogged = [<Button label="CADASTRAR" redirect="signup" />, <Button label="ENTRAR" redirect="login" />]
    const navLogged = [<ButtonSair set={setIsLoged} />]
    const subSessoes = ['perfil', 'jogados', 'jogando', 'completo', 'platinados', 'dropado', 'planejado']

    const sectionGames = {
        titles: ['atividade recente', 'completo', 'platinados'],
        icons: ['./icon-relogio.png', './icon-completo.png', './icon-trofeu.png'],
        descricao: ['Imagem de Relógio', 'Imagem de Concluido', 'Imagem de Trofeu'],
        games: [[], [], []]
    }

    const infos = {
        jogados: 0,
        completo: 0,
        platinados: 0
    }

    return (
        <div>
            <header className="font-inter w-[max(100%,9.7rem)] h-[max(6.434vh,2.33675rem)] flex justify-between bg-dark-green ">
                <ImgHome />
                <Nav elements={isLoged ? navLogged : navNotLogged} />
            </header>
            <main className="bg-light-green h-[93.566vh]">
                <div className="relative h-[31%] w-[70%]">
                    <div className="flex flex-col h-[max(24.38vh,8.216rem)] justify-center">
                        <div className="flex justify-between ml-10 items-center font-josefin font-normal text-light-green-700">
                            <div className="flex items-center gap-5">
                                <img className="size-[7.9028vw]" src="./user-big.png" alt="Usuário Grande" />
                                <header>
                                    <h1 className="text-[1.6rem]">Nome</h1>
                                    <h2 className="text-[1.25rem]">Bio</h2>
                                </header>
                            </div>
                            <div className="flex gap-5 text-[1.25rem]">
                                {Object.keys(infos).map(key =>
                                    <div className="flex flex-col items-center">
                                        <p>{infos[key]}</p>
                                        <p className="border-t border-light-green-700">{key}</p>
                                    </div>)}
                            </div>
                        </div>
                    </div>
                    <div className="flex absolute bottom-0 gap-2 w-full">
                        {subSessoes.map((subSessao, index) => <Button2 key={`button-${index}`} label={subSessao} />)}
                    </div>
                </div>
                <div className="min-h-[69%] h-min bg-light-green-700">
                    <div className="flex flex-col ml-5 pt-8">
                        {sectionGames.titles.map((titulo, index) => <SectionGame title={titulo} icon={<img className="inline" src={sectionGames.icons[index]} alt={sectionGames.descricao[index]} games={sectionGames.games[index]} />} />)}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Profile