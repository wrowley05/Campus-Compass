//FAQ.js
import { useState } from 'react'
import Navbar from './Navbar.jsx'
import "./index.css"


const Scav = () => {

	const questions = [
		{
			questionText: 'What year was this University first Established?',
			answerOptions: [
				{ answerText: '1933', isCorrect: false },
				{ answerText: '1791', isCorrect: false },
				{ answerText: '1827', isCorrect: true },
				{ answerText: '1897', isCorrect: false },
			],
			hint: 'This year was the first time the university was established as a Tradesmen and Mechanics Institute.',
			clue: 'Starting at the Courtyard use the Passcode provided at the sign.',
			pass: '1234',
			img: 'https://mi-linux.wlv.ac.uk/~2332813/demo/Courtyard.png'
		},
		{
			questionText: 'How many University Campuses are there?',
			answerOptions: [
				{ answerText: '2', isCorrect: false },
				{ answerText: '4', isCorrect: true },
				{ answerText: '5', isCorrect: false },
				{ answerText: '1', isCorrect: false },
			],
			hint: 'Temp',
			clue: 'Go to the location shown in the below picture at Millenium City for the passcode.',
			pass: '1234',
			img: 'https://mi-linux.wlv.ac.uk/~2332813/demo/MilleniumCity.jpg'
		},
		{
			questionText: 'Which Building Contains the Library?',
			answerOptions: [
				{ answerText: 'Ambika Paul', isCorrect: true },
				{ answerText: 'Millenuim City', isCorrect: false },
				{ answerText: 'Alan Turing', isCorrect: false },
				{ answerText: 'Wulfrina', isCorrect: false },
			],
			hint: 'This building is named the after the daughter of a famous Indian philanthropist.',
			clue: 'Next head to the location shown in the below picture at Ambika Paul for the passcode.',
			pass: '1234',
			img: 'https://mi-linux.wlv.ac.uk/~2332813/demo/Library.jpg'
		},
		{
			questionText: 'How many students are there currently enroled in this University Globally?',
			answerOptions: [
				{ answerText: '12,000', isCorrect: false },
				{ answerText: '50,000', isCorrect: false },
				{ answerText: '7,000', isCorrect: false },
				{ answerText: '25,000', isCorrect: true },
			],
			hint: 'This is the number of students enroled in 2025',
			clue: 'Go to the location shown in the below picture at Wulfruna Building for the passcode.',
			pass: '1234',
			img: 'https://mi-linux.wlv.ac.uk/~2332813/demo/WulfrunaBuilding.jpg'
		},
	];



	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [incorrect, setIsIncorrect] = useState(null);
	const [passCode, setPassCode] = useState('');

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			if (passCode === questions[currentQuestion].pass) {
				setScore(score + 1);


				const nextQuestion = currentQuestion + 1;
				if (nextQuestion < questions.length) {
					setCurrentQuestion(nextQuestion);
				} else {
					setShowScore(true);
				}
            } else {
                setIsIncorrect("Incorrect Password");
                setTimeout(() => {
                    setIsIncorrect(null);
				}, 5000);
			}

			} else {
				setIsIncorrect("Incorrect Answer");
				setTimeout(() => {
					setIsIncorrect(null);
				}, 2500);

			
		}
	};


	return (
		<>

			<Navbar />
		<div style={style.mainContainer}>
			{showScore ? (
				<div className='scoreSection'>
                    Congratulations you have completed the scavenger hunt! <br></br>
				</div>
			) : (
				<>
					<div style={style.questionSection}>
						<div style={style.questionCount}>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
								<div style={style.questionText}>
									<br></br>
								{questions[currentQuestion].clue}
									<br></br>
									<br></br>
									<img draggable="false" style={style.image} src={questions[currentQuestion].img} />									<br></br>
									<br></br>
									<label>
										PassCode: <input value={passCode} onChange={e => setPassCode(e.target.value)} />
									</label>
									<br></br>
                                    <br></br>
									{questions[currentQuestion].questionText}
								</div>
					</div>
							<div style={style.answerSection}>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button style={style.button} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>						))}
								{incorrect}
							</div>

				</>
			)}
			</div>
			</>
	);
}

const style = {
    mainContainer: {
        width: '90%', // Use percentage instead of fixed width
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center', // Center content
    },

    answerSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '30px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        alignItems: 'center',
        padding: '10px',
    },

    button: {
        padding: '12px',
        width: '80%', // Make buttons responsive
        maxWidth: '300px',
        backgroundColor: '#FCEE32',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },

    questionSection: {
        border: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
        padding: '15px',
    },

    image: {
        width: '100%', // Make images responsive
        maxWidth: '400px',
        height: 'auto',
        borderRadius: '5px',
    }
};

export default Scav