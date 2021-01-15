import classes from './App.module.css'

const App = () => {

	const surveys = [
		"https://leeds.onlinesurveys.ac.uk/estimation-dissertation-survey-1",
		"https://leeds.onlinesurveys.ac.uk/estimation-dissertation-survey-2-2",
		"https://leeds.onlinesurveys.ac.uk/estimation-dissertation-survey-3",
		"https://leeds.onlinesurveys.ac.uk/estimation-dissertation-survey-4"
	]
	const link = surveys[Math.floor(surveys.length*Math.random())]

  return (
    <div className={classes["app"]}>
		<div className={classes["page"]}>
			<div className={classes["title"]}>Estimation Dissertation Survey</div>
			<div className={classes["intro"]}>
				<div className={classes["answers"]}>
					You have been invited to participate in a survey. During this survey <u>it is VERY important you do not use the internet</u> when answering, as this survey studies how individuals guess answers
				</div>
				<div className={classes["answers"]}>
					Please read the information below, and feel free to get in touch if you have any queries, or if there is anything you do not understand. Once you have read the information, and you are ready to start, please press the button below and it will take you to the survey page. The survey consists of 8 Questions, and should not take more than 3 minutes to complete.
				</div>
			</div>
			<a className={classes["link"]} href={link}> Click Me To Begin! </a>
			<div className={classes["ethic"]}>
				<div className={classes["question"]}>What is the purpose of this study? </div>
				<div className={classes["answers"]}>
					The purpose of this study is to look at how people guess the answers to general knowledge questions, as well as a few questions involving resource allocation. This will be used in a dissertation that aims to contribute to the existing pool of research on the subject
				</div>
				
				<div className={classes["question"]}>Can I participate? Do I have to participate?</div>
				<div className={classes["answers"]}>
					If you are over the age of 18 and reside in the UK, then you are free to participate. Participation is entirely voluntary
				</div>

				<div className={classes["question"]}>What will I have to do?</div>
				<div className={classes["answers"]}>
					If you choose to participate you will be shown 8 questions, each with a numerical value to input. These questions will be general knowledge based, with a few additional resource allocation questions at the end. The survey should not take any longer than 5 minutes to complete
				</div>

				<div className={classes["question"]}>What personal data do you collect?</div>
				<div className={classes["answers"]}>
					This survey is anonymous, the only information collected is your age and gender. Due to the randomized data collection it is not possible to withdraw your application once completed. However, if during the experiment you would like to stop participating, closing the tab will do this.
				</div>

				<div className={classes["question"]}>How long will my data be stored for?</div>
				<div className={classes["answers"]}>
					Your data will be stored for 7 months, whilst the writing of the dissertation is undertaken. At that point all data will be deleted.
				</div>

				<div className={classes["question"]}>Who will have access to my data?</div>
				<div className={classes["answers"]}>
					Only me, the student, and my assessor will have any access to the data you provide
				</div>

				<div className={classes["question"]}>Contact Information:</div>
				<div className={classes["answers"]}>
					If you have any further questions, feel free to send your emails to:
				bn18k6s@leeds.ac.uk
				</div>
			</div> 
		</div>
    </div>
  )
}

export default App
