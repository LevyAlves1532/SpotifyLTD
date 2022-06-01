// LIBs
import styled from 'styled-components';

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

    .icon-area {
      align-self: center;
      width: 100px;
      height: 100px;
      border-radius: 50px;
      background-color: rgba(0, 0, 0, .1);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      margin-bottom: 79px;
      margin-left: -500px;
      opacity: 0;
      transition: all ease 2s;

      svg {
        font-size: 50px;
        color: #FFF;
        transition: all ease 2s;
      }

      &.active {
        margin-left: 0;
        opacity: 1;
      }
    }

    .body-area {
      margin-bottom: 178px;
      display: flex;
      flex-direction: column;
      margin-left: -500px;
      opacity: 0;
      transition: all ease 2s;

      .title-area {
        text-align: center;
        margin-bottom: 31px;

        .title {
          font-size: 48px;
          font-weight: bold;
          color: #FFF;
          margin: 0;
          cursor: default;
          transform: rotate(-5deg);
          transition: all ease 1.5s;

          .active {
            color: #FFFF00;
            font-size: 58px;
          }
        }
      }

      .loading-area {
        align-self: center;
        border: 2px solid transparent;
        border-top-color: #FFF;
        width: 31px;
        height: 31px;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: isRotating 1s infinite;

        svg {
          font-size: 25px;
          color: #FFF;
          animation-name: rotateSpotify;
          animation-duration: 4s;
          animation-iteration-count: infinite;
        }

        @keyframes rotateSpotify {
          0% {
            transform: rotate(0);
          }

          25% {
            transform: rotate(-75deg);
          }

          50% {
            transform: rotate(75deg);
          }

          75% {
            transform: rotate(-360deg);
          }

          100% {
            transform: rotate(0);
          }
        }

        @keyframes isRotating {
          to {
            transform: rotate(-1turn);
          }
        }
      }

      &.active {
        margin-left: 0;
        opacity: 1;

        .title-area {
          .title {
            transform: rotate(0);
          }
        }
      }
    }

    .logo-area {
      align-self: center;
      margin-left: -500px;
      opacity: 0;
      transition: all ease 2s;

      &.active {
        margin-left: 0;
        opacity: 1;
      }
    }
  }
`;