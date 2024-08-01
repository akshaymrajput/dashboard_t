import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const feedbackData = [
    {
        avatar: "https://i.pravatar.cc/150?img=1",
        name: "Alice Johnson",
        rating: 4,
        feedback:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    },
    {
        avatar: "https://i.pravatar.cc/150?img=2",
        name: "Bob Smith",
        rating: 5,
        feedback:
            "Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
    },
    {
        avatar: "https://i.pravatar.cc/150?img=3",
        name: "Catherine Lee",
        rating: 3,
        feedback:
            "Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum.",
    },
    {
        avatar: "https://i.pravatar.cc/150?img=4",
        name: "David Williams",
        rating: 5,
        feedback:
            "Proin eget tortor risus. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
    },
    {
        avatar: "https://i.pravatar.cc/150?img=5",
        name: "Ella Brown",
        rating: 4,
        feedback:
            "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit.",
    },
    {
        avatar: "https://i.pravatar.cc/150?img=6",
        name: "Frank Miller",
        rating: 2,
        feedback:
            "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    },
    {
        avatar: "https://i.pravatar.cc/150?img=7",
        name: "Grace Wilson",
        rating: 5,
        feedback:
            "Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat.",
    },
    {
        avatar: "https://i.pravatar.cc/150?img=8",
        name: "Henry Davis",
        rating: 4,
        feedback:
            "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
    },
    {
        avatar: "https://i.pravatar.cc/150?img=9",
        name: "Isabella Martinez",
        rating: 3,
        feedback:
            "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada.",
    },
    {
        avatar: "https://i.pravatar.cc/150?img=10",
        name: "James Garcia",
        rating: 5,
        feedback:
            "Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit.",
    },
];

const CustomerFeedback = () => {
    return (
        <div className="p-4 bg-gray-800 rounded-lg h-full">
            <div className="text-2xl font-semibold mb-2">
                Customer's Feedback
            </div>
            <div className="overflow-y-auto overflow-x-hidden max-h-96">
                {feedbackData.map((feedback, index) => (
                    <div
                        key={index}
                        className="flex flex-col mb-4 py-4 rounded-lg"
                    >
                        <div className="flex items-center mb-2">
                            <img
                                src={feedback.avatar}
                                alt={feedback.name}
                                className="w-10 h-10 rounded-full mr-3"
                            />
                            <span className="">{feedback.name}</span>
                        </div>
                        <div className="flex items-center mb-2">
                            {Array.from({ length: 5 }, (_, i) =>
                                i < feedback.rating ? (
                                    <FaStar
                                        key={i}
                                        className="text-yellow-500"
                                    />
                                ) : (
                                    <FaRegStar
                                        key={i}
                                        className="text-gray-300"
                                    />
                                )
                            )}
                        </div>
                        <p className="text-gray-300 text-sm line-clamp-4 overflow-hidden pr-4">
                            {feedback.feedback}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerFeedback;
