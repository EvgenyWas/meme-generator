import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

type TMeme = {
    id: string,
    name: string,
    url: string,
}

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "React is...",
        bottomText: "soooooooo cool!",
        randomImage: "https://i.imgflip.com/2hgfw.jpg" 
    });
    const [allMemes, setAllMemes] = useState<TMeme[]>([]);

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        };

        getMemes();
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    };
    
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    };

    return (
        <main>
            <StyledForm className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form__input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form__input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form__button"
                    onClick={getMemeImage}
                    name="randomImage"
                >
                    Get a new meme image 🖼️
                </button>
            </StyledForm>
            <StyledMeme className="meme">
                <img src={meme.randomImage} className="meme__image" />
                <h2 className="meme__text top">{meme.topText}</h2>
                <h2 className="meme__text bottom">{meme.bottomText}</h2>
            </StyledMeme>
        </main>
    );
};

const StyledForm = styled.div`
    display: grid;
    grid-template: 40px 40px / 1fr 1fr;
    gap: 17px;

    .form__input {
        font-family: "Karla", sans-serif;
        border-radius: 5px;
        border: 1px solid #D5D4D8;
        text-indent: 5px;
    }

    .form__button {
        grid-column: 1 / -1;
        font-family: "Karla", sans-serif;
        border-radius: 5px;
        background: linear-gradient(90.41deg, #711F8D 1.14%, #A818DA 100%);
        color: white;
        border: none;
        cursor: pointer;
    }
`
const StyledMeme = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .meme__image {
        max-width: 100%;
        border-radius: 3px;
    }

    .meme__text {
        position: absolute;
        width: 80%;
        text-align: center;
        left: 50%;
        transform: translateX(-50%);
        margin: 15px 0;
        padding: 0 5px;
        font-family: impact, sans-serif;
        font-size: 2em;
        text-transform: uppercase;
        color: white;
        letter-spacing: 1px;
        text-shadow:
            2px 2px 0 #000,
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px 2px 0 #000,
            0 2px 0 #000,
            2px 0 0 #000,
            0 -2px 0 #000,
            -2px 0 0 #000,
            2px 2px 5px #000;
    }

    .bottom {
        bottom: 0;
    }

    .top {
        top: 0;
    }
`

export default Meme;