import React, {useEffect} from 'react';

import AuthorNavbar from '../../components/navbars/AuthorNavbar';
import ShareBtns from '../../components/share btns/ShareBtns';
import HelpBtn from '../../components/help btn/HelpBtn';
import Background from '../../components/background/Background';

import Preupload from '../../components/upload/Preuplaod';
import Postupload from '../../components/upload/Postupload';

import { useRecoilValue, useRecoilState } from 'recoil';
import { userEmailState, publishedState } from '../../state/Atoms';

const Write = () => {
  const userEmail = useRecoilValue(userEmailState);
  const [published, setPublished] = useRecoilState(publishedState)

  const checkUpload = () => {
    if(userEmail !== null) {
      let data = { email: userEmail }

      fetch('http://localhost:3001/upload/check', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
          if(data.published) {
            setPublished(true);
          } else {
            setPublished(false);
          }
      })
    } else { return }
  }

  useEffect(() => {
    checkUpload();
  }, [userEmail]);

  if(published) {
    return (
    <>
      < AuthorNavbar />

      < Postupload />

      < ShareBtns />
      < HelpBtn />
      < Background />
    </>
    )
  } else {
    return (
    <>
      < AuthorNavbar />

      < Preupload />

      < ShareBtns />
      < HelpBtn />
      < Background />
    </>
    )
  }

}

export default Write;
