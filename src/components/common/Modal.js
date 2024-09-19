"use client";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, openModal, selectModalState } from "@/lib/slices/modalSlice";
import { useState } from "react";
import Search from "@/components/Search";
import welcomeStep1 from "public/image/modal_add.png";
import welcomeStep2 from "public/image/orbit.png";
import welcomeStep3 from "public/image/modal_dot_line.png";
import welcomeStep4 from "public/image/modal_line.png";

const AddModal = ({ addMovie, addEvent, onClose }) => {
  const dispatch = useDispatch();

  const handleAddMovieClick = () => {
    dispatch(
      openModal({
        modalType: "ADD_MOVIE_MODAL",
      })
    );
  };

  const handleAddEventClick = () => {
    dispatch(
      openModal({
        modalType: "ADD_EVENT_MODAL",
      })
    );
  };

  return (
    <div>
      <button onClick={onClose}>Close</button>
      <button onClick={handleAddMovieClick}>{addMovie}</button>
      <button onClick={handleAddEventClick}>{addEvent}</button>
    </div>
  );
};

const AddMovie = ({ search, title, history_time, country, keyword, content, onClose }) => {
  const [formData, setFormData] = useState({
    search: "",
    title: "",
    history_time: "",
    country: "",
    keyword: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitBtn = (e) => {
    e.preventDefault();
    // 이후 api 들어오면 수정하고 여기에 데이터 보내는 로직 추가
    console.log("submitted modal form data!!:", formData);
    onClose();
  };

  return (
    <div>
      <button type="button" onClick={onClose}>
        Close
      </button>

      <Search />

      {/* Search 창에서 검색-클릭해서 데이터 들어오면 하단 폼 형식이 뜸
        아래의 form 형식은 이 데이터의 유무에 따라 false면 빈페이지 아이콘을 보여주기로 함 true면 form  */}
      <form onSubmit={submitBtn}>
        {/* #영화정보는 검색창에서 클릭해서 정보가 띄워지게 할거라 유저가 조작할 부분이 아님 */}
        <div>
          <label>#영화 정보</label>
          <h2>{title}</h2>
          {/* <div>{released_yymm}</div> */}
          {/* <div>{image}</div> */}
          {/* <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Movie Title" /> */}
        </div>

        {/* 여기부터 유저가 직접 작성할 부분 */}
        <div>
          <label>시대적 배경</label>
          <input
            type="text"
            name="history_time"
            value={formData.history_time}
            onChange={handleChange}
            placeholder="radio btn으로 변경 필요"
          />
        </div>
        <div>
          <label>배경 국가</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Event Tag" />
        </div>
        <div>
          <label>키워드</label>
          <input
            type="text"
            name="keyword"
            value={formData.keyword}
            onChange={handleChange}
            placeholder="Keyword Tag"
          />
        </div>
        <div>
          <label>한줄평</label>
          <textarea
            name="content"
            maxLength={25}
            value={formData.content}
            onChange={handleChange}
            placeholder="한줄평을 간략히 작성해주세요. (최대 25자)"
          />
        </div>
        <div>
          <button type="submit">등록하기</button>
        </div>
      </form>
    </div>
  );
};

// Form으로 보내야 함
const AddEvent = ({ search, title, history_time, country, keyword, content, onClose }) => {
  const [formData, setFormData] = useState({
    search: "",
    title: "",
    history_time: "",
    country: "",
    keyword: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitBtn = (e) => {
    e.preventDefault();
    // 이후 api 들어오면 수정하고 여기에 데이터 보내는 로직 추가
    console.log("submitted modal form data!!:", formData);
    onClose();
  };

  return (
    <div>
      <button type="button" onClick={onClose}>
        Close
      </button>
      <form onSubmit={submitBtn}>
        {/* 여기부터 유저가 직접 작성할 부분 */}
        <div>
          <label>등록할 사건</label>
          <textarea
            name="content"
            maxLength={25}
            value={formData.content}
            onChange={handleChange}
            placeholder="사건 이름을 간략히 작성해주세요. (최대 25자)"
          />
        </div>
        <div>
          <label>시대적 배경</label>
          <input
            type="text"
            name="history_time"
            value={formData.history_time}
            onChange={handleChange}
            placeholder="date"
          />
        </div>
        <div>
          <label>배경 국가</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Event Tag" />
        </div>
        <div>
          <label>키워드</label>
          <input
            type="text"
            name="keyword"
            value={formData.keyword}
            onChange={handleChange}
            placeholder="Keyword Tag"
          />
        </div>

        <div>
          <button type="submit">등록하기</button>
        </div>
      </form>
    </div>
  );
};

// 최초 로그인 여부 체크해서 단 한번 보여주는 웰컴 모달 구현 필요
const WelcomeModal = ({ onClose }) => {
  const image = [welcomeStep1, welcomeStep2, welcomeStep3, welcomeStep4];
  const content = ["A", "B", "C", "D"];

  const [slidepage, setSlidePage] = useState(0);

  const prevSlide = () => {
    if (slidepage > 0) {
      setSlidePage(slidepage - 1);
    }
  };

  const nextSlide = () => {
    if (slidepage < content.length - 1) {
      setSlidePage(slidepage + 1);
    }
  };
  return (
    <div>
      <div>
        <div>
          {slidepage > 0 && <button onClick={prevSlide}>이전 슬라이드</button>}
          {slidepage < content.length - 1 ? (
            <button onClick={nextSlide}>다음 슬라이드</button>
          ) : (
            <button onClick={onClose}>X</button>
          )}
        </div>
        <h2>{`Step ${slidepage + 1}`}</h2>
        <img src={image[slidepage].src} alt={`welcome modal image ${slidepage}`} />
        <p>{content[slidepage]}</p>
      </div>
    </div>
  );
};

const ModalManager = () => {
  const dispatch = useDispatch();

  // 외부 클릭시에도 모달 닫히는 코드 추가 구현 필요

  const { isOpen, modalType, modalProps } = useSelector(selectModalState);

  if (!isOpen) return null;

  const renderModalContent = () => {
    switch (modalType) {
      case "WELCOME_MODAL":
        return <WelcomeModal {...modalProps} onClose={() => dispatch(closeModal())} />;
      case "ADD_MODAL":
        return <AddModal {...modalProps} onClose={() => dispatch(closeModal())} />;
      case "ADD_MOVIE_MODAL":
        return <AddMovie {...modalProps} onClose={() => dispatch(closeModal())} />;
      case "ADD_EVENT_MODAL":
        return <AddEvent {...modalProps} onClose={() => dispatch(closeModal())} />;
      default:
        return null;
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-4 bg-white rounded-lg shadow-lg">{renderModalContent()}</div>
    </div>
  );
};

export default ModalManager;
