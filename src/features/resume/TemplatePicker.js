import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pickTemplate, changeProgressBar } from './resumeSlice';
import '../../App.css';

const TemplatePicker = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const passedName = useSelector((state) => state.resume.name);

	const nextPage = () => {
		navigate('/final');
		dispatch(changeProgressBar(100));
	};
	const prevPage = () => {
		navigate('/work-history');
		dispatch(changeProgressBar(60));
	};

	const selectTemplate = (e) => {
		dispatch(pickTemplate(e.target.value));
	};

	return (
		<section>
			<h3>Hey, {passedName} pick a template</h3>
			<form>
				<input
					onChange={selectTemplate}
					type='radio'
					id='first-template'
					name='templatepick'
					value='first-template'
				/>
				<label htmlFor='first-template' className='example1'></label>
        
				<input
					onChange={selectTemplate}
					type='radio'
					id='second-template'
					name='templatepick'
					value='second-template'
				/>
				<label htmlFor='second-template' className='example2'></label>
        
        
        <input
          onChange={selectTemplate}
          type="radio"
          id="third-template"
          name="templatepick"
          value="third-template"
        />
        <label htmlFor="third-template" className="example3"></label>
       
			</form>
			<div className='buttons flex justify-between align-center'>
				<button onClick={prevPage}>Back</button>
				<button className='next' onClick={nextPage}>
					Next: View Resume
				</button>
			</div>
		</section>
	);
};

export default TemplatePicker;
