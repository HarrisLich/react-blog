import React from 'react'
import Particles from 'react-tsparticles'
import { useMemo, useCallback } from 'react'
import {loadSlim} from 'tsparticles-slim'
const ParticlesBackground = () => {
    const options = useMemo(()=>{
        return{
            autoplay: true,
            detectretina: true,
            pauseonblur: true,
            background: {
                color: "#2D2424" // 2D2424  1A120B
            },
            fullScreen:{
                enable: false
            },
            particles: {
                color:{
                    value: "#BEADFA"
                },
                number:{
                    value: 75
                },
                move:{
                    enable: true
                },
                links:{
                    enable: true,
                    distance: 300,
                    color: "#D0BFFF",
                    width: 2
                },
                rotate:{
                    direction: "clockwise",
                    random: true
                },
                reduceDuplicates: true
            }
        }
    }, [])

    const particlesInit = useCallback((engine) => {
        loadSlim(engine)
    }, [])

  return (
    <Particles init={particlesInit} options={options}></Particles>
  )
}

export default ParticlesBackground;
