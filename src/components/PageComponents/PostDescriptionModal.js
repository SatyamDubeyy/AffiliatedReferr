import React, { useState } from 'react'
import { Avatar, Input, Modal, Typography, Spin } from 'antd'
import { AiOutlineClose } from 'react-icons/ai'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

// import { addComment, fetchSinglePost } from '../../redux/actions/postsAction'
import { addComment, deleteComment } from '../../redux/actions/postsAction'

const PostDescriptionModal = ({ data, isModalOpen2, setIsModalOpen2 }) => {
  const dispatch = useDispatch()
  const userProfileDetails = useSelector((state) => state.userReducer.user)
  const { singlePost, getPostLoading } = useSelector((state) => state.postReducer)

  // const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputState, setInputState] = useState(null)

  // const showModal = () => {
  //   setIsModalOpen2(true)
  //   dispatch(fetchSinglePost(data?._id))
  // }

  // useEffect(() => console.log(singlePost), [singlePost])

  const handleOk = () => {
    setIsModalOpen2(false)
  }

  const handleCancel = () => {
    setIsModalOpen2(false)
  }

  const commentHandler = (e) => {
    dispatch(addComment({ post: data?._id, text: e.target.value }, setInputState))
  }

  return (
    <>
      {/* <Button onClick={showModal} className='post-modal-show-btn'>
        View Post
      </Button> */}
      <Modal
        className='post-desc-modal'
        // title='Basic Modal'
        open={isModalOpen2}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        closable={true}
        closeIcon={<AiOutlineClose style={{ fill: '#222' }} />}
      >
        {getPostLoading ? (
          <div
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Spin size='large' />
          </div>
        ) : (
          <div className='container'>
            <div className='left' style={{ borderRight: '1px solid #595959' }}>
              <Avatar className='post-user-img' src={singlePost?.user?.profileImage} />
              <Typography.Title className='title'>{singlePost?.title}</Typography.Title>
              <div className='img-container'>
                <img src={singlePost?.image} />
              </div>
              <Typography.Paragraph className='para'>
                {singlePost?.description}
              </Typography.Paragraph>
              <div className='bottom-desc'>
                <div className='tags-container'>
                  <Typography.Paragraph className='para'>{singlePost?.price}</Typography.Paragraph>
                </div>
                <div className='tags-container'>
                  <Typography.Paragraph className='para'>
                    {singlePost?.comission}
                  </Typography.Paragraph>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', columnGap: '1rem' }}>
                  {singlePost?.category?.map((item, index) => (
                    <div className='tags-container' key={index}>
                      <Typography.Paragraph className='para'>{item}</Typography.Paragraph>
                    </div>
                  ))}
                </div>
                <div className='tags-container'>
                  <Typography.Paragraph className='para'>{singlePost?.type}</Typography.Paragraph>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='right-top-container'>
                <Typography.Title className='title'>Comments</Typography.Title>
                <div className='main-container'>
                  {singlePost?.comments?.map((comment, index) => {
                    return (
                      <div
                        key={index}
                        className={
                          comment?.user?._id == userProfileDetails?._id
                            ? 'comment-container comment-container-right'
                            : 'comment-container'
                        }
                      >
                        <div className='comment-left'>
                          <Avatar src={comment?.user?.profileImage} />
                        </div>
                        <div className='comment-right-container'>
                          <div className='comment-right'>
                            <Typography.Paragraph className='name'>
                              {comment?.user?.name}
                            </Typography.Paragraph>
                            <Typography.Paragraph className='comment'>
                              {comment?.text}
                            </Typography.Paragraph>
                          </div>
                          {comment?.user?._id == userProfileDetails?._id && (
                            <div
                              className='delete-comment-container'
                              onClick={() =>
                                dispatch(
                                  deleteComment({ comment: comment._id, post: singlePost._id }),
                                )
                              }
                            >
                              <FaRegTrashAlt />
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <Input
                placeholder='Add Comment...'
                className='comment-input'
                value={inputState}
                onChange={(e) => setInputState(e.target.value)}
                onPressEnter={commentHandler}
                // onChange={commentHandler}
              />
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

export default PostDescriptionModal
