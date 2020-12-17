const { OK, CREATED, BAD_REQUEST } = require('../../config/statusCode').statusCode;
const followServices = require('../../services/follow');
const userServices = require('../../services/user');

/*
    GET /api/follows/counts
    * 팔로우 수, 팔로워 수 조회 API
*/
exports.getFollowCounts = async (req, res, next) => {
  try {
    const followCounts = await followServices.getFollowCounts(userNo);

    res.status(OK).json({
      message: '팔로우 수, 팔로워 수 조회 성공',
      data: followCounts,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      message: '팔로우 수, 팔로워 수 조회 실패',
    });
  }
};

/*
    GET /api/follows/following
    * 내가 팔로우한 사람 목록 조회 API
*/
exports.getFollowingList = async (req, res, next) => {
  try {
    const userNo = req.user.no;
    const followingList = await followServices.getFollowingList(userNo);

    res.status(OK).json({
      message: '내가 팔로우한 사람 목록 조회 성공',
      data: followingList,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      message: `내가 팔로우한 사람 목록 조회 실패`,
    });
  }
};

/*
    GET /api/follows/followed
    * 나를 팔로우 하는 사람 목록 조회 API
*/
exports.getFollowedList = async (req, res, next) => {
  try {
    const userNo = req.user.no;
    const followedList = await followServices.getFollowedList(userNo);

    res.status(OK).json({
      message: '나를 팔로우 하는 사람 목록 조회 성공',
      data: followedList,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      message: `나를 팔로우 하는 사람 목록 조회 실패: ${error}`,
    });
  }
};

exports.getFollowingUsers = async (req, res, next) => {
  try {
    const userNo = req.user.no;
    const followedList = await followServices.getFollowingUsers(userNo);

    res.status(OK).json({
      message: '내가 팔로우 하는 사람 정보 조회 성공',
      data: followedList,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      message: `내가 팔로우 하는 사람 정보 조회 실패: ${error}`,
    });
  }
};

exports.getFollowedUsers = async (req, res, next) => {
  try {
    const userNo = req.user.no;
    console.log(userNo);
    const followedList = await followServices.getFollowedUsers(userNo);

    res.status(OK).json({
      message: '나를 팔로우 하는 사람 정보 조회 성공',
      data: followedList,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      message: `나를 팔로우 하는 사람 정보 조회 실패: ${error}`,
    });
  }
};

/*
    POST /api/follows
    * 팔로우 추가 API
*/
exports.setFollowing = async (req, res, next) => {
  try {
    const { followingNo } = req.body;
    const userNo = req.user.no;
    const result = await followServices.setFollowing({ userNo, followingNo });
    res.status(CREATED).json({
      message: '팔로우 추가 성공',
      followNo: result.no,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      message: `팔로우 추가 실패${error}`,
    });
  }
};

exports.isFollowing = async (req, res, next) => {
  const { followed } = req.query;
  const following = req.user.no;

  try {
    const result = await followServices.isFollowing(following, followed);
    res.status(OK).json({
      message: '팔로우 확인 성공',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/*
    DELETE /api/follows/:no
    * 팔로우 삭제 API
*/
exports.deleteFollowing = async (req, res, next) => {
  const { no } = req.params;
  const userNo = req.user.no;

  try {
    await followServices.deleteFollowing(userNo, no);
    res.status(OK).json({
      message: '팔로우 삭제 성공',
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      message: '팔로우 삭제 실패',
    });
  }
};

/*
    GET /api/follows/search
    * 사용자 검색 API
*/

exports.searchUsers = async (req, res, next) => {
  try {
    const { keyword } = req.query;
    const user = await userServices.searchUser(keyword);

    res.status(OK).json({
      message: '사용자 검색 성공',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
