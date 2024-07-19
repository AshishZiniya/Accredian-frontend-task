import { useState } from "react";

export default function Form() {
    const [name, setName] = useState("");
    const [name1, setName1] = useState("");
    const [email, setEmail] = useState("");
    const [email1, setEmail1] = useState("");
    const [phone, setPhone] = useState("");
    const [phone1, setPhone1] = useState("");
    const [address, setAddress] = useState("");
    const [interest, setInterest] = useState("");
    const [message, setMessage] = useState(""); // To display success/error message
    const [loading, setLoading] = useState(false); // To handle loading state

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setMessage("");

        const formData = {
            referrerName: name,
            referrerEmail: email,
            referrerPhone: phone,
            refereeName: name1,
            refereeEmail: email1,
            refereePhone: phone1,
            refereeAddress: address,
            interest: interest
        };

        try {
            const response = await fetch('http://localhost:5000/api/referral', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                setMessage("Referral submitted successfully!");
                setName("");
                setName1("");
                setEmail("");
                setEmail1("");
                setPhone("");
                setPhone1("");
                setAddress("");
                setInterest("");
            } else {
                setMessage(result.error || "Failed to submit referral.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex w-[1000px]">
                <div className='space-y-2 w-full'>
                    <h2 className="text-lg font-bold leading-6 text-gray-900">Referrer Details</h2>
                    <div className="w-[75%]">
                        <label htmlFor="referrerName" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                        <div className="mt-2">
                            <input type="text" name="referrerName" id="referrerName" value={name} onChange={(e) => setName(e.target.value)} autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="w-[75%]">
                        <label htmlFor="referrerEmail" className="block text-sm font-medium leading-6 text-gray-900">Email:</label>
                        <div className="mt-2">
                            <input id="referrerEmail" name="referrerEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="w-[75%]">
                        <label htmlFor="referrerPhone" className="block text-sm font-medium leading-6 text-gray-900">Phone Number:</label>
                        <div className="mt-2">
                            <input id="referrerPhone" name="referrerPhone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
                <div className='space-y-2 w-full'>
                    <h2 className="text-lg font-bold leading-6 text-gray-900">Referee Details</h2>
                    <div className="w-[75%]">
                        <label htmlFor="refereeName" className="block text-sm font-medium leading-6 text-gray-900">Name:</label>
                        <div className="mt-2">
                            <input id="refereeName" name="refereeName" type="text" value={name1} onChange={(e) => setName1(e.target.value)} required className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="w-[75%]">
                        <label htmlFor="refereeEmail" className="block text-sm font-medium leading-6 text-gray-900">Email:</label>
                        <div className="mt-2">
                            <input id="refereeEmail" name="refereeEmail" type="email" value={email1} onChange={(e) => setEmail1(e.target.value)} required className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="w-[75%]">
                        <label htmlFor="refereePhone" className="block text-sm font-medium leading-6 text-gray-900">Phone Number:</label>
                        <div className="mt-2">
                            <input id="refereePhone" name="refereePhone" type="tel" value={phone1} onChange={(e) => setPhone1(e.target.value)} required className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="w-[75%]">
                        <label htmlFor="refereeAddress" className="block text-sm font-medium leading-6 text-gray-900">Address:</label>
                        <div className="mt-2">
                            <input id="refereeAddress" name="refereeAddress" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="w-[75%]">
                        <label htmlFor="refereeInterest" className="block text-sm font-medium leading-6 text-gray-900">Interest/Reason for Referral:</label>
                        <div className="mt-2">
                            <textarea id="refereeInterest" name="refereeInterest" rows="4" value={interest} onChange={(e) => setInterest(e.target.value)} required className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-4">
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </div>
            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </form>
    );
};
