import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "antd";
import 'antd/dist/antd.css';
import { deleteJournal, seeJournal } from '../store/journals'


const JournalEdit = ({ journal }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [mood, setMood] = useState(journal.mood)
    const [text, setText] = useState(journal.text)
    const [currentDate, setCurrentDate] = useState(journal.currentDate)
    const dispatch = useDispatch()

    console.log(journal)

    const journalId = journal.id;

    // function editForm() {
    //     if (editVisibility === false) {
    //       setEditVisibility(true);
    //     }
    //     if (editVisibility === true) {
    //       setEditVisibility(false);
    //     }
    //   }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const onJournalUpdate = async (e) => {
        e.preventDefault();
        journal = { mood, text, currentDate };
        const res = await fetch(`/api/journals/update/${journalId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journal)
        });
        const data = await res.json();
        console.log(journal)

        dispatch(seeJournal())
    }

    async function deleteOneJournal() {
        await dispatch(deleteJournal(journalId))
    }

    return (
        journal !== undefined && (
            <div>

                <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[
                    <button key="submit" type="primary" onClick={handleOk} onSubmit={onJournalUpdate}>
                        Close </button>,

                ]}>
                    <form onSubmit={onJournalUpdate}>
                        <div>
                            <label for="mood" className="flex text-sm font-medium text-gray-300">Mood</label>
                            <input
                                className="input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                                name="journal_mood"
                                placeholder={journal.mood}
                                type="text"
                                value={mood}
                                onChange={(e) => setMood(e.target.value)}
                            />
                        </div>
                        <div className="column_border">
                            <label for="text" className="flex text-sm font-medium text-gray-300">Journal Entry</label>
                            <textarea
                                className="input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                                name="journal_text"
                                placeholder={journal.text}
                                type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </div>
                        <div className="column_border">
                            <label for="currentDate" className="flex text-sm font-medium text-gray-300">Journal Date</label>
                            <input
                                className="input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                                name="journal_date"
                                placeholder={journal.currentDate}
                                type="date"
                                value={currentDate}
                                onChange={(e) => setCurrentDate(e.target.value)}
                            />
                        </div>
                        <div className='update'>
                            
                            <button type="primary" style={{ float: 'right' }, { padding: '3px' }, { margin: '3px' }} type='submit'>Update</button>

                        </div>

                    </form>

                </Modal>

                <div className='btn-holder x-button'>
                    <div className="border-2 p-1 rounded-sm m-2 border-gray-400 p-1 text-gray-200"  onClick={showModal}>Edit</div>
                
                <button onClick={deleteOneJournal}>
                    <svg className=' hover:bg-indigo-800 hover:text-indigo-300' fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" /></svg>
                </button>
                </div>
            </div>
        )
    )




}
export default JournalEdit;