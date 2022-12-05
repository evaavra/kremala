import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import GetWord from '../functions/GetWord';
import Transactions from '../functions/Transactions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ wrongAnswers, setWrongAnswers, missingLetters,
  rightAnswers, setRightAnswers, setClickedLetters, setClickedLettersRight, setClickedLettersWrong,
  firstLetter, lastLetter, setMissingLetters, setFirstLetter, setLastLetter, setDashes, setMissingLettersWord }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [win, setWin] = useState(false);
  const handleClose = () => {
    setOpen(false);
    getWord();
  }

  useEffect(() => {
    if (wrongAnswers === 7) {
      handleOpen();
      setWin(false);
    }
    if (missingLetters.length && rightAnswers === missingLetters.length) {
      handleOpen();
      setWin(true);
    }
  }, [wrongAnswers, missingLetters.length, rightAnswers, setWrongAnswers, setRightAnswers])

  const getWord = async () => {
    setWrongAnswers(0);
    setRightAnswers(0);
    setClickedLetters([])
    setClickedLettersRight([])
    setClickedLettersWrong([])
    var word = await GetWord();
    Transactions(word, setFirstLetter, setLastLetter, setDashes, setMissingLetters);
    console.log(word)

  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {win ? "You won!" : "Game over!"}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The missing word was: {firstLetter}{missingLetters}{lastLetter}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}