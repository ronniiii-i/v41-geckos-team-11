import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TextArea from '../../components/TextArea';
import Input from '../../components/Input';

import { changeProgressBar } from './resumeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
library.add(faPlus);

const WorkHistory = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const nextPage = () => {
		dispatch(changeProgressBar(80));
		navigate('/template');
	};
	const prevPage = () => {
		dispatch(changeProgressBar(40));
		navigate('/education');
	};
	return (
		<section>
			<form>
				<div>
					<h2>Work History</h2>
					<div className='row flex justify-between align-center full-width'>
						<div className='input-block'>
							<Input text='Company' name='company' />
						</div>
						<div className='input-block'>
							<Input text='Job Title' name='jobTitle1' />
						</div>
					</div>
					<div className='row flex justify-between align-center full-width'>
						<div className='input-block'>
							<Input text='Start Date' type='month' name='startWorkDate1' />
						</div>
						<div className='input-block'>
							<Input text='End Date' type='month' name='endWorkDate1' />
						</div>
					</div>
					<div className='row flex justify-between align-center full-width'>
						<div className='input-block desc'>
							<label>Work Description</label>
							<TextArea name='workDescription1' />
						</div>
					</div>
					<FontAwesomeIcon icon={('fa-solid', 'fa-plus')} />
				</div>
			</form>
			<div className='buttons flex justify-between align-center'>
				<button onClick={prevPage}>Back</button>
				<button className='next' onClick={nextPage}>
					Next: Select Template
				</button>
			</div>
		</section>
	);
};

export default WorkHistory;
