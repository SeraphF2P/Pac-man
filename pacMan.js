document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const width = 28



    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 0, 0, 0, 0, 3, 0, 0, 0, 1, 1, 0, 0, 0, 3, 0, 0, 0, 0, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 4, 4, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 0, 0, 3, 0, 0, 1, 4, 4, 1, 0, 0, 3, 0, 0, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    const squares = []
    function createBoard() {

        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement('div')
            grid.appendChild(square);
            squares.push(square)
            if (layout[i] === 0) {
                squares[i].classList.add('pac-dot')
            } else if (layout[i] === 1) {
                squares[i].classList.add('wall')
            }
            else if (layout[i] === 2) {
                squares[i].classList.add('ghost-liar')
            }
            else if (layout[i] === 3) {
                squares[i].classList.add('power-pellet')

            }

        }

    }
    createBoard()
    let score = 0
    let pacManCurrentIndex = 490




    squares[pacManCurrentIndex].classList.add('pacMan')

    function move(e) {
        squares[pacManCurrentIndex].classList.remove('pacMan')
        if (squares[pacManCurrentIndex].classList.contains('pac-dot')) {
            squares[pacManCurrentIndex].classList.remove('pac-dot')

            score += 10
            scoreDisplay.innerHTML = score
        }

        switch (e.key) {
            case 'ArrowUp':
                if (pacManCurrentIndex - width >= 0
                    && !squares[pacManCurrentIndex - width].classList.contains('wall')
                    && !squares[pacManCurrentIndex - width].classList.contains('ghost-liar'))
                    pacManCurrentIndex -= width



                break
            case 'ArrowDown':
                if (pacManCurrentIndex + width < width * width
                    && !squares[pacManCurrentIndex + width].classList.contains('wall')
                    && !squares[pacManCurrentIndex + width].classList.contains('ghost-liar'))
                    pacManCurrentIndex += width



                break
            case 'ArrowRight':
                if (pacManCurrentIndex % width < width - 1 && !squares[pacManCurrentIndex + 1].classList.contains('wall'))
                    pacManCurrentIndex += 1
                if (pacManCurrentIndex === 335)
                    pacManCurrentIndex = 308

                break
            case 'ArrowLeft':
                if (pacManCurrentIndex % width !== 0 && !squares[pacManCurrentIndex - 1].classList.contains('wall'))
                    pacManCurrentIndex -= 1
                if (pacManCurrentIndex === 308)
                    pacManCurrentIndex = 334

                break

        }

        squares[pacManCurrentIndex].classList.add('pacMan')
        eatenPP()
        checkForWin()
        checkGameOver()
    }

    document.addEventListener('keydown', move)


    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.timerId = NaN
            this.isScared = false
        }
    }
    ghosts = [
        new Ghost('blinky', 432, 250),
        new Ghost('pinky', 433, 400),
        new Ghost('inky', 434, 300),
        new Ghost('clyde', 435, 500),
        new Ghost('sam', 436, 100)
    ]

    ghosts.forEach(ghost => {

        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add('ghost')

    });

    ghosts.forEach(ghost => moveGhost(ghost)

    )

    function moveGhost(ghost) {
        const directions = [1, -1, width, -width]
        let direction = directions[Math.floor(Math.random() * directions.length)]

        ghost.timerId = setInterval(function () {

            if (!squares[ghost.currentIndex + direction].classList.contains('wall')
                &&
                !squares[ghost.currentIndex + direction].classList.contains('ghost')) {
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                ghost.currentIndex += direction
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')


            } else direction = directions[Math.floor(Math.random() * directions.length)]

            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add('scared-ghost')
            }


            if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pacMan')) {
                squares[pacManCurrentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                score += 100
                ghost.currentIndex = ghost.startIndex
                squares[ghost.currentIndex].classList.add('ghost')
            }


            checkForWin()
            checkGameOver()

        }, ghost.speed)


    }
    function eatenPP() {
        if (squares[pacManCurrentIndex].classList.contains('power-pellet')) {
            ghosts.forEach(ghost => ghost.isScared = true)
            setTimeout(unScareGhost, 10000)
            squares[pacManCurrentIndex].classList.remove('power-pellet')
            squares[ghost.currentIndex].classList.add('scared-ghost')
            score += 100
            scoreDisplay.innerHTML = score
        }








    }

    function unScareGhost() {
        ghosts.forEach(ghost => ghost.isScared = false)
    }




    function checkGameOver() {
        if (squares[pacManCurrentIndex].classList.contains('ghost')
            && !squares[pacManCurrentIndex].classList.contains('scared-ghost')) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keydown', move)
            // setTimeout(function () { alert('Game Over')}, 500)
            scoreDisplay.innerHTML = 'Game Over'
        }

    }


    function checkForWin() {
        if (score === 2500) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keydown', move)
            scoreDisplay.innerHTML = 'You Won'
        }

    }

































})
