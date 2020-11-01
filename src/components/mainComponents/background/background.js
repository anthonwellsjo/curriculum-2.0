import React, { useRef } from 'react'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import classes from './background.module.css';

import countries from '../../../images/projects/countriesandcities.jpg';
import chuck from '../../../images/projects/itschuck.jpg';

const jobs =
    [
        {
            name: "Countries and cities",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            background: countries
        },
        {
            name: "It's Chuck",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            background: chuck
        },
        {
            name: "The Cube",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            background: "cube"
        }

    ]

const Background = props => {

    const pages = [
        `https://picsum.photos/${props.width}/${props.height}`,
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
    ]
    // const index = useRef(0)
    // const [props, set] = useSprings(pages.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }))
    // const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
    //     if (down && distance > window.innerWidth / 2)
    //         cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
    //     set(i => {
    //         if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
    //         const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0)
    //         const sc = down ? 1 - distance / window.innerWidth / 2 : 1
    //         return { x, sc, display: 'block' }
    //     })
    // })
    // return props.map(({ x, display, sc }, i) => (
    //     <div className={classes.holder}>
    //         <animated.div {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
    //             <animated.div style={{ transform: sc.interpolate(s => `scale(${s})`), backgroundImage: `url(${pages[i]})` }} />
    //         </animated.div>
    //     </div>
    // ))


    return (
        <div style={{ backgroundImage: `url(${pages[0]})` }} className={classes.background}>

        </div>
    )
}

export default Background;

