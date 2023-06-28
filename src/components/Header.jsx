import React from 'react';

export default function Header({conferenceDetails}) {
  return (
    <header>
      <h1>{`${conferenceDetails} משרד המשפטים`}</h1>  {/* ToDo: display all relevant details  */}
      <h2>{`{conferenceDetails.subjectNo} תיק מספר`}</h2>
    </header>
  );
}
