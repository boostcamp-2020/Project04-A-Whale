import styled from 'styled-components';

const BucketListItemWrapper = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
  .abandon-dialog {
    width: 400px;
  }
  .list-icon {
    margin-left: 10px;
    font-size: 20px;
  }
  border-bottom: 1px solid #eeeeee;
`;

const BucketTitleTextWrapper = styled.span`
  padding-left: 20px;
  flex: 6;
  font-size: 20px;
`;

export { BucketListItemWrapper, BucketTitleTextWrapper };
