import MultiLineText from "../text/MultiLineText";

const Portfolio = () => {
    const black = 0x111111;
    return (
        <>
            <group name="Contact">
                <group name="Contact">
                    <MultiLineText
                        content={"Contact"}
                        position={[-5.6, 0.002, 3.6]}
                        fontSize={0.2}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <MultiLineText
                        content={"                       Phone number: +32 476 75 49 52\n                                 Email: Lannoy.alexander@outlook.com\n                                                LinkedIn.com/in/alexander-lannoy-a13517235/\nGithub.com/alexlann"}
                        position={[-5.49, 0.002, 3.85]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                </group>
            </group>
            <group name="Introduction">
                <group name="Name">
                    <MultiLineText
                        content={"Alexander Lannoy"}
                        position={[-4.8, .7, 2.3]}
                        fontSize={0.3}
                    />
                </group>
                <group name="JobPosition">
                    <MultiLineText
                        content={"Full-stack developer and designer - Region Ghent"}
                        position={[-4.9, .5, 2.3]}
                    />
                </group>
                <group name="AboutMe">
                    <MultiLineText
                        content={"              Motivated and studious graduate with hands-on\n                      experience as a self-employed student. Experienced\n                     at using modern design methods and tools and the\n most relevant programming languages."}
                        position={[-5.1, 0.002, 2.5]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                </group>
            </group>
            <group name="Skills">
                <MultiLineText
                    content={"Skills"}
                    position={[-0.65, 2.5, 2.35]}
                    fontSize={0.2}
                />
                <MultiLineText
                    content={"HTML\nCSS/SASS\nPHP\nJavaScript\nTypeScript\nReact.js\nNode.js"}
                    position={[-1.2, 0.97, 1.5]}
                />
                <MultiLineText
                    content={"Three.js\nCannon.js\nLaravel\nPython\nWordpress\nCraftCMS\nStatamic"}
                    position={[-0.5, 0.97, 1.5]}
                />
                <MultiLineText
                    content={"Adobe\nBlender\n\nDutch\nEnglish\nFrench"}
                    position={[0.1, 0.97, 1.5]}
                />
            </group>
            <group name="WorkExperience">
                <MultiLineText
                    content={"<- Work Experience"}
                    position={[2.37, 2.8, 1]}
                    rotation={[0, -Math.PI / 2, -3* Math.PI / 13]}
                    fontSize={0.2}
                    color={black}
                />
                <MultiLineText
                    content={"Self-employed student"}
                    position={[0, 4.3, -3.4]}
                    fontSize={0.2}
                />
                <MultiLineText
                    content={"Ghent | Apr 2021 - Jun 2023"}
                    position={[-0.35, 4.1, -3.4]}
                />
                <MultiLineText
                    content={"•	Designed creative websites while \n           taking brand experience into account."}
                    position={[-0.2, 3.8, -3.4]}
                />
                <MultiLineText
                    content={"        •	Developed responsive websites using element\n       factories and object oriented programming.\n"}
                    position={[0, 3.45, -3.4]}
                />
                <MultiLineText
                    content={"•	Created modern logos with the\n        design sprint method while taking\n            trends and customers into account."}
                    position={[-0.25, 3.05, -3.4]}
                />
                <MultiLineText
                    content={"References"}
                    position={[2.3, 4.3, -3.4]}
                    fontSize={0.2}
                />
                <MultiLineText
                    content={"       Groenendaal Bert\nFormer client\n                            bert.groenendaal@telenet.be"}
                    position={[2.12, 4.1, -3.4]}
                />
            </group>
            <group name="Education">
                <MultiLineText
                    content={"Education"}
                    position={[7.75, 1.8, 1.4]}
                    rotation={[0, -Math.PI / 2, 0]}
                    fontSize={0.2}
                />
                <MultiLineText
                    content={"      Bachelor in Graphical\nand Digital Media"}
                    position={[8.65, 2, 0.75]}
                    fontSize={0.14}
                />
                <MultiLineText
                    content={"                         Elective course: New Media\nDevelopment\n                Artevelde University of\n       Applied Sciences\n          Ghent | 2019 - 2023"}
                    position={[8.4, 1.6, 0.75]}
                    fontSize={0.1}
                />
                <MultiLineText
                    content={"   High school diploma\nMath and Sciences"}
                    position={[10.35, 2, 0.75]}
                    fontSize={0.14}
                />
                <MultiLineText
                    content={"School of Brothers\n       Roeselare | 2012-2018"}
                    position={[10.18, 1.6, 0.75]}
                    fontSize={0.1}
                />
            </group>
            <group name="Hobbies">
                <MultiLineText
                    content={"Hobbies"}
                    position={[8.25, 1.02, 6.4]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    fontSize={0.2}
                />
                <MultiLineText
                    content={"Personal Coding Projects\n(Board) Gamer\nDungeon Master\nBaking"}
                    position={[9.2, 1.8, 7.5]}
                    rotation={[0, Math.PI, 0]}
                    fontSize={0.14}
                />
            </group>
        </>
    );
}

export default Portfolio;