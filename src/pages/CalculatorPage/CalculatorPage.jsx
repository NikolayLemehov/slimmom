import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CalculatorСalorieForm from '../../components/CalculatorСalorieForm/CalculatorСalorieForm';
import RightSideBar from 'components/RightSideBar/RightSideBar';

import { BgImg, Wrapper } from './CalculatorPage.styled';
import { Box } from '@chakra-ui/react';
import { dailyRateById } from 'redux/dailyRate/dailtyRateOperations';
import { authSelectors } from 'redux/auth/authSelectors';
import { getDataUser } from 'redux/dailyRate/dailyRateSlice';

export default function CalculatorPage() {
  const userId = useSelector(authSelectors.userId);
  const dispatch = useDispatch();

  // Form
  const [heightUser, setHeightUser] = useState(null);
  const [ageUser, setAgeUser] = useState(null);
  const [currentWeightUser, setCurrentWeightUser] = useState(null);
  const [desiredWeightUser, setDesiredWeightUser] = useState(null);
  const [bloodTypeUser, setBloodTypeUser] = useState(1);
  const [renderAlert, setRenderAlert] = useState(false);
  const [showValidationInput, setShowValidationInput] = useState(false);
  const [blurOnInput, setBlurOnInput] = useState(false);

  const handleChange = e => {
    const name = e.target.name;
    const value = Number(e.target.value);
    switch (name) {
      case 'heightUser':
        setHeightUser(value);
        break;
      case 'ageUser':
        setAgeUser(value);
        break;
      case 'currentWeightUser':
        setCurrentWeightUser(value);
        break;
      case 'desiredWeightUser':
        setDesiredWeightUser(value);
        break;
      case 'bloodTypeUser':
        setBloodTypeUser(value);
        break;

      default:
        break;
    }
  };
  const handleInputBlur = () => {
    setBlurOnInput(false);
  };

  const dataUser = {
    weight: currentWeightUser,
    height: heightUser,
    age: ageUser,
    desiredWeight: desiredWeightUser,
    bloodType: bloodTypeUser,
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Validation inputs
    setShowValidationInput(true);
    setBlurOnInput(true);

    // Validation form
    setRenderAlert(false);
    const isEmptyField = Object.values(dataUser).some(
      item => item === 0 || item === null
    );

    if (isEmptyField) {
      setRenderAlert(true);
      setTimeout(() => {
        setRenderAlert(false);
      }, 3500);
      return;
    }

    if (
      heightUser < 140 ||
      heightUser > 220 ||
      ageUser < 16 ||
      ageUser > 120 ||
      currentWeightUser < 40 ||
      currentWeightUser > 150 ||
      desiredWeightUser < 40 ||
      desiredWeightUser > 150
    ) {
      return;
    }

    // Submit
    dispatch(getDataUser(dataUser));
    const fetchObj = { userId, dataUser };
    dispatch(dailyRateById(fetchObj));
  };

  return (
    <Wrapper>
      <Box>
        <CalculatorСalorieForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleInputBlur={handleInputBlur}
          bloodTypeUser={bloodTypeUser}
          renderAlert={renderAlert}
          showValidationInput={showValidationInput}
          blurOnInput={blurOnInput}
          dataUser={dataUser}
        />
      </Box>
      <Box position="relative">
        <RightSideBar></RightSideBar>
        <BgImg />
      </Box>
    </Wrapper>
  );
}
