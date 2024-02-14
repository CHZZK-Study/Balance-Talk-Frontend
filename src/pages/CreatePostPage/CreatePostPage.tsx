import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import CreatePostForm from './sections/CreatePostForm';
import Calendar from '../../assets/images/calendar.png';
import Add from '../../assets/images/add.png';
import useInputs from '../../hooks/useInputs';
import { CreatePost } from '../../types/post';

const inputStyles = {
  borderRadius: '5px',
  fontSize: '20px',
  fontFamily: 'SpoqaHanSansNeo-Regular',
  border: 0,
  backgroundColor: '#EEEEEE',
  boxShadow: '0px 4px 4px gray',
};

const CreatePostPage = () => {
  const initialState = {
    title: '',
    postCategory: 'CASUAL',
    deadline: 'xxxx-xx-xx',
    tags: [],
    balanceOptions: [
      {
        title: '',
        description: '',
        file: {
          uploadName: '사진1',
          path: '',
          type: '',
          size: '',
        },
      },
      {
        title: '',
        description: '',
        file: {
          uploadName: '사진2',
          path: '',
          type: '',
          size: '',
        },
      },
    ],
  };
  const { form, onChange, setArray } = useInputs<CreatePost>(initialState);

  const { title, postCategory } = form;

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div
      css={css({
        width: '100vw',
      })}
    >
      <div
        css={css({
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
        })}
      >
        <div
          css={css({
            display: 'flex',
            justifyContent: 'flex-start',
            width: '1080px',
          })}
        >
          <h2
            css={css({
              fontSize: '24px',
              fontFamily: 'SpoqaHanSansNeo-Medium',
            })}
          >
            게시글 작성
          </h2>
        </div>
      </div>
      <form>
        <div
          css={css({
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
          })}
        >
          <input
            name="title"
            value={title}
            onChange={onChange}
            css={css({
              width: '1080px',
              height: '40px',
              ...inputStyles,
              ':hover': {
                backgroundColor: '#BEBEBE',
              },
            })}
            placeholder=" 게시글 제목을 입력해 주세요."
          />
        </div>
        <div
          css={css({
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
          })}
        >
          <div
            css={css({
              display: 'flex',
              justifyContent: 'space-between',
              width: '1080px',
            })}
          >
            <div
              css={css({
                display: 'flex',
              })}
            >
              <div css={css({ marginRight: '20px' })}>
                <select
                  name="postCategory"
                  value={postCategory}
                  onChange={onChange}
                  css={css({
                    width: '100px',
                    height: '40px',
                    textAlignLast: 'center',
                    ...inputStyles,
                    ':hover': {
                      backgroundColor: '#BEBEBE',
                    },
                  })}
                >
                  <option value="CASUAL">캐쥬얼</option>
                  <option value="DISCUSSION">토론</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="casual"
                  css={css({
                    position: 'relative',
                    ':before': {
                      content: "''",
                      position: 'absolute',
                      right: '10px',
                      top: '0',
                      bottom: '0',
                      width: '24px',
                      height: '24px',
                      backgroundImage: `url(${Calendar})`,
                    },
                  })}
                >
                  <input
                    id="casual"
                    css={css({
                      width: '250px',
                      height: '40px',
                      ...inputStyles,
                      ':hover': {
                        backgroundColor: '#BEBEBE',
                      },
                      '::placeholder': {
                        textAlign: 'center',
                        paddingRight: '15px',
                      },
                    })}
                    placeholder="마감 기한"
                  />
                </label>
              </div>
            </div>
            <button
              type="button"
              css={css({
                position: 'relative',
                marginBottom: '10px',
                backgroundColor: '#FFD369',
                border: 0,
                borderRadius: '10px',
                fontFamily: 'SpoqaHanSansNeo-Medium',
                fontSize: '16px',
                width: '100px',
                height: '40px',
                boxShadow: '0px 4px 4px gray',
                ':hover': {
                  backgroundColor: '#E5BD5E',
                },
              })}
            >
              작성
            </button>
          </div>
        </div>
        <div
          css={css({
            display: 'flex',
            justifyContent: 'center',
          })}
        >
          <div
            css={css({
              display: 'flex',
              justifyContent: 'flex-start',
              width: '1080px',
            })}
          >
            <label
              htmlFor="casual"
              css={css({
                position: 'relative',
                ':before': {
                  content: "''",
                  position: 'absolute',
                  right: '15px',
                  top: '8px',
                  bottom: '0',
                  width: '24px',
                  height: '24px',
                  backgroundImage: `url(${Add})`,
                },
              })}
            >
              <input
                id="casual"
                css={css({
                  width: '170px',
                  height: '40px',
                  ...inputStyles,
                  ':hover': {
                    backgroundColor: '#BEBEBE',
                  },
                  '::placeholder': {
                    textAlign: 'center',
                    paddingRight: '15px',
                  },
                })}
                placeholder="태그 추가"
              />
            </label>
          </div>
        </div>
        <div
          css={css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          })}
        >
          <CreatePostForm setBalanceOptions={setArray} index={0} />
          <span
            css={css({
              fontFamily: 'SpoqaHanSansNeo-Bold',
              fontSize: '50px',
              position: 'absolute',
              zIndex: 1,
              WebkitTextStroke: '1px white',
              textShadow: '0px 4px 4px gray',
            })}
          >
            vs
          </span>
          <CreatePostForm setBalanceOptions={setArray} index={1} />
        </div>
      </form>
    </div>
  );
};

export default CreatePostPage;
