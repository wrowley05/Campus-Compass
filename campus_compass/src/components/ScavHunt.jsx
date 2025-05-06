//FAQ.js
import { useState, useEffect } from 'react'
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
									<img draggable="false" width = '400px' height = '300px' src={questions[currentQuestion].img} />
									<br></br>
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
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
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
		maxWidth: '600px',
		margin: '0px auto 20px',
		padding: '20px',
		fontFamily: 'Arial, sans-serif',
	},

	answerSection: {
		display: 'flex',
		flexDirection: 'column',
		gap: '30px',
		marginTop: '50px',
		border: '1px solid #ddd',
		borderRadius: '1px',
		overflow: 'hidden',
		boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        alignItems: 'center',
	},

    button: {
        padding: '10px',
        margin: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
		cursor: 'pointer',
	},

	questionSection: {
		border: '1px solid #ddd',
        display: 'flex',
		fontSize: '18px',
		fontWeight: 'bold',
		color: '#333',
	},
}

export default Scav