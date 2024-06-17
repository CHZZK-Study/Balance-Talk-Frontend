import React, {
  ChangeEvent,
  FormEvent,
  useState,
  KeyboardEvent,
  MouseEvent,
  useEffect,
} from 'react';
import { css } from '@emotion/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import CreatePostForm from '../../components/CreatPostPage/CreatePostForm';
import Add from '../../assets/images/add.png';
import useInputs from '../../hooks/common/useInputs';
import { CreatePost } from '../../types/post';
import { fetchPost } from '../../api/posts/posts';
import TagButton from '../../components/Buttons/TagButton';
import {
  createFormContainer,
  etcButtonContainer,
  etcButtonWrapper,
  headingWrapper,
  inputTitleWrapper,
  shakeAnimation,
  tagContainer,
  tagWrapper,
  versusText,
} from './CreatePostPage.style';
import Heading from '../../components/design/Heading/Heading';
import { PLACE_HOLDER } from '../../constants/message';

const inputStyles = {
  borderRadius: '5px',
  fontSize: '16px',
  border: 0,
  backgroundColor: '#EEEEEE',
  boxShadow: '0px 4px 4px gray',
};

const CreatePostPage = () => {
  const navigate = useNavigate();

  const [isValidDate, setIsValidDate] = useState(false);
  const [clickSubmit, setClickSubmit] = useState(false);

  const initialState = {
    title: '',
    category: 'CASUAL',
    deadline: 'xxxx-xx-xx',
    tags: [],
    balanceOptions: [
      {
        title: '',
        description: '',
        storedImageName: '',
      },
      {
        title: '',
        description: '',
        storedImageName: '',
      },
    ],
  };

  const queryClient = useQueryClient();

  const { form, onChange, setArray, setEach, onBlur } =
    useInputs<CreatePost>(initialState);

  const { title, category, deadline, tags, balanceOptions } = form;

  const [tag, setTag] = useState('');

  const onTagChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTag(e.target.value);
  };

  const onTagEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      e.preventDefault();

      if (!tags.includes(tag)) {
        const newTag = [...tags, tag];
        setEach('tags', newTag);
      }

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

  const isBlankString = (str: string) => {
    return str.trim() === '';
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClickSubmit(true);
    setTimeout(() => {
      setClickSubmit(false);
    }, 500);
    if (!isValidDate) {
    } else if (isBlankString(title)) {
    } else if (isBlankString(balanceOptions[0].title)) {
    } else if (isBlankString(balanceOptions[0].description)) {
    } else if (isBlankString(balanceOptions[1].title)) {
    } else if (isBlankString(balanceOptions[1].description)) {
    } else {
      mutate(form);
      await queryClient.invalidateQueries({
        queryKey: ['posts', { sort: 'createdAt', page: 0 }],
      });
      navigate('/');
    }
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div css={css({ width: '100vw' })}>
      <div css={headingWrapper}>
        <Heading size="small" css={css({})}>
          게시글 작성
        </Heading>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div css={inputTitleWrapper}>
          <input
            onBlur={onBlur}
            name="title"
            maxLength={50}
            required
            value={title}
            onChange={onChange}
            css={css({
              width: '60%',
              height: '40px',
              ...inputStyles,
              ':hover': {
                backgroundColor: '#BEBEBE',
              },
              '&:required:invalid': {
                border: '1px solid red',
              },
            })}
            autoComplete="nope"
            placeholder={PLACE_HOLDER.POST.TITLE}
          />
          {!title && (
            <div
              css={css({
                color: 'red',
                width: '60%',
                display: 'flex',
                justifyContent: 'flex-start',
                marginTop: '7px',
              })}
            >
              <div
                css={css({
                  color: 'red',
                })}
              >
                게시글 제목을 입력해 주세요.
              </div>
            </div>
          )}
        </div>

        <div css={etcButtonContainer}>
          <div css={etcButtonWrapper}>
            <div css={css({ display: 'flex' })}>
              <div css={css({ marginRight: '20px' })}>
                <select
                  name="category"
                  value={category}
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
              <div
                css={css({
                  animation: `${!isValidDate && clickSubmit ? `${shakeAnimation} .5s linear` : 'none'}`,
                })}
              >
                <DatePicker
                  disablePast
                  value={dayjs(deadline)}
                  onChange={(newDate) => {
                    setEach(
                      'deadline',
                      `${dayjs(newDate).format('YYYY-MM-DD')}T23:59:59`,
                    );
                    setIsValidDate(true);
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
                    border: isValidDate ? 'none' : '1px solid red',
                  })}
                  label="마감 기한"
                  slotProps={{
                    textField: {
                      size: 'small',
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
        <div css={tagContainer}>
          <div css={tagWrapper}>
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
                maxLength={20}
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
        <div css={createFormContainer}>
          <CreatePostForm
            setBalanceOptions={setArray}
            index={0}
            clickSubmit={clickSubmit}
          />
          <span css={versusText}>vs</span>
          <CreatePostForm
            setBalanceOptions={setArray}
            index={1}
            clickSubmit={clickSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default CreatePostPage;
