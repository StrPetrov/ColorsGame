function unlockAndGenerate() {
    let unlockButton = document.querySelector('.unlock_generators');
    let generators = document.querySelector('.generators');
    let elementToRenderColorCode = document.querySelector('.generated_color_code');
    let rgbGenerator = document.querySelector('.rgb_generator');
    let hexGenerator = document.querySelector('.hex_generator');
    let generatedColorCodeRGB;
    let generatedColorCodeHEX;
    let colorField = document.querySelectorAll('.offeredColor');
    let secondContainer = document.querySelector('.main_container_second_section');
    let thirdContainer = document.querySelector('.main_container_third_section');
    let submit = document.querySelector('#submit');
    let username = document.querySelector('#username');
    let score = 0;
    const usernameValue = [];
    let user = document.querySelectorAll('.username');
    let scr = document.querySelectorAll('.score');
    let z = -1;
    let i = 0;

    submit.addEventListener('click', function(event) {
        event.preventDefault();
        usernameValue.push(username.value);
        username.value = '';
        z += 1;
        if(z === 4) {
            z = 3;
            user[z].style.color = 'black';
            scr[z].style.color = 'black';
        }
        for (; i < usernameValue.length; i++) {

            if(usernameValue.length > 4) {
                usernameValue.shift();
            }

            if (i === 4) {
                i = 0;
            }

            user[i].innerHTML = `${usernameValue[i]}`;
            scr[i].innerHTML = 0;
        }
    })

    thirdContainer.addEventListener('click', function() {
        secondContainer.style.animation = 'slideInReverse 1s linear forwards';
        thirdContainer.style.visibility = 'hidden';
        generators.style.cssText = 'animation: generatorReverse .5s linear forwards';
        rgbGenerator.style.cssText = 'pointer-events: auto; background-color: white;';
        hexGenerator.style.cssText = 'pointer-events: auto; background-color: white;';

        for (let i = 0; i < colorField.length; i++) {
            colorField[i].style.animation = 'disappearReverse .5s linear forwards';
            colorField[i].style.pointerEvents = 'auto';
        }
    })

    unlockButton.addEventListener('click', function() {
        generators.style.cssText = 'animation: generator .5s linear forwards';
    })

    rgbGenerator.addEventListener('click', function() {

        rgbGenerator.style.cssText = 'pointer-events: none; background-color: rgb(117, 240, 29);'
        hexGenerator.style.cssText = 'pointer-events: none; background-color: rgb(201, 198, 197);'

        let o = Math.round;
        let r = Math.random;
        let s = 255;
        generatedColorCodeRGB = `rgb(${o(r()*s)}, ${o(r()*s)}, ${o(r()*s)})`;
        elementToRenderColorCode.innerHTML = `<span>${generatedColorCodeRGB}</span>`;

        function generateRGBcode () {
            let o = Math.round;
            let r = Math.random;
            let s = 255;
            return `rgb(${o(r()*s)}, ${o(r()*s)}, ${o(r()*s)})`;
        }

        for(let i = 0; i < colorField.length; i++) {
            colorField[i].style.backgroundColor = `${generateRGBcode()}`;
        }

        let randomId = Math.floor(Math.random() * 6) + 1;

        switch(randomId) {
            case 1: {
                document.getElementById('c1').style.backgroundColor = `${generatedColorCodeRGB}`;
                break;
            }
            case 2: {
                document.getElementById('c2').style.backgroundColor = `${generatedColorCodeRGB}`;
                break;
            }
            case 3: {
                document.getElementById('c3').style.backgroundColor = `${generatedColorCodeRGB}`;
                break;
            }
            case 4: {
                document.getElementById('c4').style.backgroundColor = `${generatedColorCodeRGB}`;
                break;
            }
            case 5: {
                document.getElementById('c5').style.backgroundColor = `${generatedColorCodeRGB}`;
                break;
            }
            case 6: {
                document.getElementById('c6').style.backgroundColor = `${generatedColorCodeRGB}`;
            }
        }

        secondContainer.style.animation = 'slideIn 1s linear forwards';

        for(let i = 0; i < colorField.length; i++) {
            colorField[i].addEventListener('click', function () {
                const style = getComputedStyle(colorField[i]);
                let bckCol = style.backgroundColor;
                const style2 = getComputedStyle(thirdContainer);
                let vis = style2.visibility;
                if (generatedColorCodeRGB !== bckCol) {
                    if(vis === 'visible') {
                        score += 0;
                        colorField[i].style.animation = 'scaleDown .5s linear forwards';
                    }

                    else {
                    colorField[i].style.animation = 'disappear .5s linear forwards';
                    score += 1;
                    scr[z].innerHTML = `${score}`; 
                    }

                    if (score === 5) {
                        user[z].style.color = 'green';
                        scr[z].style.color = 'green';
                    }
                    
                    else {
                        user[z].style.color = 'red';
                        scr[z].style.color = 'red';
                    }
                }
                else {
                    thirdContainer.style.visibility = 'visible';
                    if (score === 5) {
                        user[z].style.color = 'green';
                        scr[z].style.color = 'green';
                    }
                    
                    else {
                        user[z].style.color = 'red';
                        scr[z].style.color = 'red';
                    }
                    score = 0;
                }
            }, {once: true})
        }
    })

    hexGenerator.addEventListener('click', function() {

        rgbGenerator.style.cssText = 'pointer-events: none; background-color: rgb(201, 198, 197);'
        hexGenerator.style.cssText = 'pointer-events: none; background-color: rgb(117, 240, 29);'

        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        generatedColorCodeHEX = n.slice(0, 6);
        elementToRenderColorCode.innerHTML = `<span>#${generatedColorCodeHEX}</span>`;

        function generateHEXcode () {
            let n = (Math.random() * 0xfffff * 1000000).toString(16);
            return '#' + n.slice(0, 6);
        }

        for(let i = 0; i < colorField.length; i++) {
            colorField[i].style.cssText = `background-color: ${generateHEXcode()}`;
        }

        let randomId = Math.floor(Math.random() * 6) + 1;

        switch(randomId) {
            case 1: {
                document.getElementById('c1').style.cssText = `background-color: #${generatedColorCodeHEX}`;
                break;
            }
            case 2: {
                document.getElementById('c2').style.cssText = `background-color: #${generatedColorCodeHEX}`;
                break;
            }
            case 3: {
                document.getElementById('c3').style.cssText = `background-color: #${generatedColorCodeHEX}`;
                break;
            }
            case 4: {
                document.getElementById('c4').style.cssText = `background-color: #${generatedColorCodeHEX}`;
                break;
            }
            case 5: {
                document.getElementById('c5').style.cssText = `background-color: #${generatedColorCodeHEX}`;
                break;
            }
            case 6: {
                document.getElementById('c6').style.cssText = `background-color: #${generatedColorCodeHEX}`;
            }
        }

        secondContainer.style.animation = 'slideIn 1s linear forwards';

        function hexToRgb(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
            } : null;
          }
        
        const convertedFromHEXtoRGBObj = hexToRgb(generatedColorCodeHEX);
        
        let convertedFromHEXtoRGBString = `rgb(`;
        
        convertedFromHEXtoRGBString += convertedFromHEXtoRGBObj.r + ', ';
        convertedFromHEXtoRGBString += convertedFromHEXtoRGBObj.g + ', ';
        convertedFromHEXtoRGBString += convertedFromHEXtoRGBObj.b + ')';

        console.log(convertedFromHEXtoRGBString);

        for(let i = 0; i < colorField.length; i++) {
            colorField[i].addEventListener('click', function() {

                const style = getComputedStyle(colorField[i]);
                let bckCol = style.backgroundColor;
                if (convertedFromHEXtoRGBString !== bckCol) {
                    colorField[i].style.animation = 'disappear .5s linear forwards';
                }
                else {
                    thirdContainer.style.visibility = 'visible';
                }
            })
        }
    })
}

unlockAndGenerate();