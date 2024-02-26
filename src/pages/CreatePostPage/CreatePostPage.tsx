import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  KeyboardEvent,
  MouseEvent,
  FocusEvent,
} from 'react';
import { css } from '@emotion/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import CreatePostForm from './sections/CreatePostForm';
import Add from '../../assets/images/add.png';
import useInputs from '../../hooks/useInputs';
import { CreatePost } from '../../types/post';
import { fetchPost } from '../../api/posts/posts';
import TagButton from '../../components/TagButton';

const inputStyles = {
  borderRadius: '5px',
  fontSize: '16px',
  fontFamily: 'SpoqaHanSansNeo-Regular',
  border: 0,
  backgroundColor: '#EEEEEE',
  boxShadow: '0px 4px 4px gray',
};

const CreatePostPage = () => {
  const navigate = useNavigate();

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

  const queryClient = useQueryClient();

  const { form, onChange, setArray, setEach } =
    useInputs<CreatePost>(initialState);

  const { title, postCategory, deadline, tags } = form;

  const [tag, setTag] = useState('');

  const onTagChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTag(e.target.value);
  };

  const onTagEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      const newTag = [...tags, tag];
      setEach('tags', newTag);
      setTag('');
    }
  };

  const onTagBlur = () => {
    if (tag) {
      const newTag = [...tags, tag];
      setEach('tags', newTag);
      setTag('');
    }
  };

  const onTagClick = (e: MouseEvent<HTMLButtonElement>) => {
    const tagValue = e.currentTarget.dataset.tag;

    const newTags = tags.filter((_tag) => _tag !== tagValue);

    setEach('tags', newTags);
  };

  const { mutate } = useMutation({
    mutationFn: fetchPost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  });

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(form);
    navigate('/');
  };

  useEffect(() => {
    console.log(form);
    console.log(tag);
  }, [form, tag]);
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
      <form onSubmit={onSubmitHandler}>
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
                <DatePicker
                  disablePast
                  value={deadline}
                  onChange={(newDate) => {
                    setEach('deadline', dayjs(newDate).format('YYYY-MM-DD'));
                  }}
                  css={css({
                    ...inputStyles,
                    ':hover': {
                      backgroundColor: '#BEBEBE',
                    },
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        border: 'none',
                      },
                      '& fieldset': {
                        border: 'none',
                      },
                    },
                  })}
                  label="마감 기한"
                  slotProps={{
                    textField: {
                      size: 'small',
                      InputProps: {
                        style: {
                          fontFamily: 'SpoqaHanSansNeo-Regular',
                        },
                      },
                      InputLabelProps: {
                        style: {
                          fontFamily: 'SpoqaHanSansNeo-Regular',
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
            <button
              type="submit"
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
                ':focus-within:before': {
                  display: 'none',
                },
              })}
            >
              <input
                id="casual"
                name="tag"
                value={tag}
                onChange={onTagChange}
                onKeyDown={onTagEnter}
                onBlur={onTagBlur}
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
                    color: 'black',
                  },
                  ':focus': {
                    backgroundColor: 'white',
                    '::placeholder': {
                      color: 'transparent',
                    },
                  },
                })}
                placeholder="태그 추가"
              />
            </label>
            <div css={css({ marginLeft: '10px', marginTop: '5px' })}>
              {tags &&
                tags.map((_tag) => (
                  <TagButton
                    key={_tag}
                    tag={_tag}
                    onClickHandler={onTagClick}
                  />
                ))}
            </div>
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
