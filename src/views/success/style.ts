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
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    box-sizing: border-box;

    .application-presentation-area {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 28px;
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
        margin-left: 10px;

        svg {
          font-size: 50px;
          color: #FFF;
          transition: all ease 2s;
        }
      }

      .presentation-area {
        margin-right: 10px;
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
            transform: rotate(30deg);
          }
        }
      }
    }

    .tracks-list-area {
      max-width: 320px;
      width: 100%;
      height: 280px;
      border-radius: 10px;
      background: rgba(0, 0, 0, .1);
      margin-bottom: 28px;
      margin-left: -500px;
      padding: 20px;
      box-sizing: border-box;
      opacity: 0;
      transition: all ease 2s;

      .inside {
        width: 100%;
        height: 100%;
        padding-right: 10px;
        box-sizing: border-box;
        overflow-y: auto;

        &::-webkit-scrollbar {
          width: 6px;
        }

        &::-webkit-scrollbar-track {
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, .6);
          border-radius: 20px;
        }
      }

      &.active {
        margin-left: 0;
        opacity: 1;
      }
    }

    .button-redirect-area {
      width: 100%;
      margin-bottom: 37px;
      display: flex;
      justify-content: center;
      margin-left: -500px;
      opacity: 0;
      transition: all ease 2s;

      .button-redirect {
        max-width: 320px;
        width: 100%;
        height: 70px;
        border-radius: 35px;
        background: rgba(0, 0, 0, .1);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFF;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;

        svg {
          margin-left: 10px;
          font-size: 28px;
        }
      }

      &.active {
        margin-left: 0;
        opacity: 1;
      }
    }

    .logo-area {
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