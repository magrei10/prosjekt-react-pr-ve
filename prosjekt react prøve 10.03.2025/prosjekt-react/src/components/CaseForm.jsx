import React, { useState, useContext } from 'react';
import { CaseContext } from '../context/CaseContext';

const CaseForm = ({ existingCase }) => {
    const { addCase, updateCase } = useContext(CaseContext);
    const [title, setTitle] = useState(existingCase ? existingCase.title : '');
    const [description, setDescription] = useState(existingCase ? existingCase.description : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const caseData = { title, description };

        if (existingCase) {
            updateCase(existingCase.id, caseData);
        } else {
            addCase(caseData);
        }

        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit">{existingCase ? 'Update Case' : 'Create Case'}</button>
        </form>
    );
};

export default CaseForm;