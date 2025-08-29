import SidebarNav from "@/components/SidebarNav";
import { Link, router } from "@inertiajs/react";
import * as Dialog from '@radix-ui/react-dialog';
import React, { useState } from "react";


export default function showticket({tickets, comments}: any){

    const [commentData, setCommentData] = useState({
        comment: '',
        ticket_id:'',
        user_id:''
      });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.post(`/tickets/${tickets.id}/comments`, {
            comment: commentData.comment,
            ticket_id: tickets.id, 
        });
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement >) => {
        setCommentData({
            ...commentData,
            [e.target.name]: e.target.value,
        });
    };

    const statusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value;
        router.put(`/tickets/${tickets.id}`, {
            status: newStatus,
          });
    }

    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <SidebarNav />
            <div style={{display: "flex-row"}}>
                <div>
                    <h1 style={{fontWeight: "bold", fontSize: "24px", padding: "12px"}}>
                        Ticket # {tickets.id}
                    </h1>
                    <div className="grid gap-1 grid-cols-2 mt-2">
                        <div className="gap-4">
                            <div>
                                <label className="font-bold text-lg">Name</label>
                                <p className="mt-1">{tickets.name}</p>
                            </div>
                            <div>
                                <label className="font-bold text-lg">Email</label>
                                <p className="mt-1">{tickets.email}</p>
                            </div>
                            <div>
                                <label className="font-bold text-lg">Department</label>
                                <p className="mt-1">{tickets.department}</p>
                            </div>
                            <div>
                                <label className="font-bold text-lg">IP Address</label>
                                <p className="mt-1">{tickets.ip_address}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className="font-bold text-lg">Created At</label>
                                <p className="mt-1">{tickets.created_at}</p>
                            </div>
                            <div className="grid grid-col">
                                <label className="font-bold text-lg">Status</label>
                                <form onChange={statusChange}>
                                    <select className="py-1 pr-4 pl-1 mt-1 rounded-md border">
                                        <option>{tickets.status}</option>
                                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                        <option value={'Pending'}>Pending</option>
                                        <option value={'In progress'}>In progress</option>
                                        <option value={'Resolved'}>Resolved</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div>
                            <label className="font-bold text-lg">Subject</label>
                            <p className="mt-1">{tickets.subject}</p>
                        </div>
                        <div>
                            <label className="font-bold text-lg">Details</label>
                            <p className="mt-1">{tickets.details}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 style={{fontWeight: "bold", fontSize: "24px", padding: "12px"}}>
                        Comments
                    </h1>
                    {comments.data.map((comment: any) => (
                        <div className="flex flex-row justify-around m-4">
                            <p key={comment.id} >{comment.user_id}</p>
                            <p key={comment.id}>{comment.comment}</p>
                            <p key={comment.id}>{comment.created_at}</p>
                        </div>
                    ))}
                </div>
                
                {/* TO GENERATE THE MODAL DIALOGUE */}
                <Dialog.Root>
                    <Dialog.Trigger className="bg-blue-500 rounded p-2 hover:bg-gray-800">
                        Comment
                    </Dialog.Trigger>

                    <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black/60"></Dialog.Overlay>

                        <Dialog.Content className="fixed w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-md p-8 shadow">
                            <form onSubmit={handleSubmit}>
                                <div className="flex items-center justify-between">
                                    <Dialog.Title className="text-xl">
                                        Add Comment
                                    </Dialog.Title>
                                </div>
                                <div className="mt-4">
                                    <CommentFields 
                                        comment={commentData.comment} 
                                        onChange={handleChange}
                                        />
                                </div>
                                <div className="mt-8 space-x-6 text-right">
                                    <Dialog.Close className="rounded px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-600">
                                        Cancel
                                    </Dialog.Close>
                                    <button className="rounded bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600">
                                        Save
                                    </button>
                                </div>  
                            </form>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
        </div>
    );
}

function CommentFields({
    comment, onChange
  }: {
    comment: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  }) {  
    return (
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-gray-900">Comment</label>
          <textarea
            autoFocus
            className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
            rows={4}
            value={comment}
            name="comment"
            onChange={onChange}
          />
        </div>
      </div>
    );
  }
