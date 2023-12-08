import React from 'react';
import { Link } from 'react-router-dom';
import AddStudentsModal from '../../views/Mentor/Classroom/Roster/AddStudents/AddStudentsModal';
import './MentorSubHeader.less';

export default function MentorSubHeader(props) {
  const {
    title,
    addActivityActive,
    addUserActive,
    classroomId,
    cardViewActive,
    listViewActive,
    checkoutActive,
    setListView,
    addStudentsToTable,
  } = props;

  return (
    <div id='page-header' role="banner">
      <h1>{title}</h1>
      <nav id='header-nav' aria-label="Mentor subheader navigation">
        {addActivityActive ? (
          <button id='link' aria-label="Add activity">
            <i className='fa fa-plus-square' aria-hidden="true" />
          </button>
        ) : null}
        {addUserActive ? (
          <AddStudentsModal
            addStudentsToTable={addStudentsToTable}
            classroomId={classroomId}
          />
        ) : null}
        {cardViewActive ? (
          <button onClick={() => setListView(false)} id='link' aria-label="Card view">
            <i className='fa fa-th' aria-hidden="true" />
          </button>
        ) : null}
        {listViewActive ? (
          <button onClick={() => setListView(true)} id='link' aria-label="List view">
            <i className='fa fa-list-alt' aria-hidden="true" />
          </button>
        ) : null}
        {checkoutActive ? (
          <Link id='link' to={'/dashboard'} aria-label="Checkout">
            <i className='fa fa-shopping-cart' aria-hidden="true" />
          </Link>
        ) : null}
      </nav>
    </div>
  );
}