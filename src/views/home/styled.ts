// LIBs
import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(to bottom, #BD00FF, #D30000);
  height: auto;
  min-height: 100vh;

  .container {
    max-width: 425px;
    width: 100%;
    height: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 40px 0;
    box-sizing: border-box;

    .application-presentation-area {
      width: 100%;
      display: flex;
      margin-bottom: 20px;
      margin-left: -500px;
      opacity: 0;
      transition: all ease 2s;

      .icon-area {
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background-color: rgba(0, 0, 0, .1);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;

        svg {
          font-size: 50px;
          color: #FFF;
          transition: all ease 2s;
        }
      }

      .presentation-area {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: default;

        .title {
          font-size: 20px;
          color: #FFF;
          font-weight: bold;
          margin: 0;
        }

        .sub-title {
          font-size: 12px;
          color: #FFFF00;
          margin: 0;
        }
      }

      &.active {
        margin-left: 0;
        opacity: 1;

        .icon-area {
          svg {
            transform: rotate(-30deg);
          }
        }
      }
    }

    .images-area {
      width: 100%;
      height: 230px;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      margin-left: -500px;
      opacity: 0;
      transition: all ease 2s;

      &.active {
        margin-left: 0;
        opacity: 1;
      }
    }

    .phrase-area {
      height: 100px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: -500px;
      opacity: 0;
      transition: all ease 2s;
      cursor: default;

      .phrase-one {
        margin-left: -200px;
        font-size: 44px;
        color: #FFF;
        font-weight: bold;
        transition: all ease 2s;
      }

      .phrase-two {
        margin-right: -200px;
        font-size: 34px;
        font-weight: bold;
        color: #FFFF00;
        transition: all ease 2s;
      }

      &.active {
        margin-left: 0;
        opacity: 1;

        .phrase-one {
          transform: rotate(10deg);
        }

        .phrase-two {
          transform: rotate(-10deg);
        }
      }
    }

    .button-area {
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
      margin-left: -500px;
      opacity: 0;
      transition: all ease 2s;

      .button {
        max-width: 320px;
        width: 100%;
        height: 70px;
        border-radius: 35px;
        background-color: rgba(0, 0, 0, .1);
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        cursor: pointer;

        .text {
          color: #FFF;
          margin: 0;
          margin-right: 10px;
          font-size: 14px;
          font-weight: bold;
        }

        svg {
          font-size: 28px;
          color: #FFF;
        }
      }

      &.active {
        margin-left: 0;
        opacity: 1;
      }
    }

    .logo-area {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-left: -500px;
      opacity: 0;
      transition: all ease 2s;

      &.active {
        margin-left: 0;
        opacity: 1;
      }
    }
  }

  @media only screen and (max-width: 425px) {
    .container {
      padding: 40px 20px;
      overflow-x: hidden;

      .phrase-area {
        margin-bottom: 40px;

        .phrase-one {
          margin-left: -150px;
        }

        .phrase-two {
          margin-right: -100px;
        }
      }
    }
  }
`;

type ImageProps = {
  x: number;
  y: number;
  delay: number;
}

export const Image = styled.img<ImageProps>`
  width: 150px;
  height: 100px;
  background-color: #212121;
  border-radius: 10px;
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  animation-name: image;
  animation-duration: .6s;
  animation-delay: ${props => props.delay}s;
  transition: all ease .6s;

  &.image-1 {
    background-image: url(../../assets/home/01.png);
  }

  &:hover {
    margin-top: -20px;
  }

  @keyframes image {
    0% {
      margin-top: 0;
    }

    50% {
      margin-top: -20px;
    }

    100% {
      margin-top: 0;
    }
  }

  @media only screen and (max-width: 425px) {
    width: 150px;
    height: 100px;
  }
`;