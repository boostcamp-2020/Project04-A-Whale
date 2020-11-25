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
  }
  border-bottom: 1px solid #eeeeee;
`;

const BucketTitleTextWrapper = styled.span`
  padding-left: 25px;
  flex: 6;
  font-size: 18px;
`;

export { BucketListItemWrapper, BucketTitleTextWrapper };
