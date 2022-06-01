// LIBs
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;

  .info-music {
    .title-music,
    .title-album {
      margin: 0;
      color: #FFF;
    }
    
    .title-music {
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 7px;
    }

    .title-album {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
    }
  }

  .author-area {
    .author {
      margin: 0;
      color: #FFF;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
    }
  }
`;