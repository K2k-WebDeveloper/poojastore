import React from "react";
import Ramm from "../../Images/Ram Navami.jpg";
function Ram() {
  return (
    <div>
      <div className="px-5 lg:px-12">
        <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">
          Ram Navami
        </h2>
        <div className="py-2 lg:flex">
          <img
            src={Ramm}
            className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
          />
          <div className="mx-3">
            <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
              Lord Rama, the son of King Dasharatha and Queen Kausalya, was born
              on this day. According to Hindu beliefs, he is the seventh
              incarnation of Vishnu. This festival is generally celebrated in
              Chaitra month or around March- April according to the Indian
              calendar. Temples are visited by people who fast on this day and
              also offer prayers with different kinds of worship rituals
              associated with it. The Ramayana, which tells about Rama’s life
              history often becomes the topic of their conversation as they
              listen to or narrate its stories. In some areas processions in
              honor of Lord Rama have been organized where crowds walk while
              carrying his idols or pictures – such events usually become joyous
              moments.
            </p>
            <p className="py-3  text-[17px] ">
              <span className="font-semibold text-[20px]">Timing:-</span>
              17th April, 2024
              <br />
              <span className="font-semibold text-[20px]">
                Key Attraction:-
              </span>
              The Ram Navami is observed by devotees through prayers, bhajans
              (saints’ songs), and reading of holy scriptures such as the
              Ramayana which tells about the life and deeds of Lord Rama.
              Temples dedicated to Lord Rama are decorated with flowers and
              illuminated with lights, while elaborate rituals are performed to
              reverence him. Also, some devotees hold processions or ‘Shobha
              Yatras’ on events that happened in Lord Rama’s life accompanied by
              devotional songs and chants.
            </p>

            <p className="py-3 text-[17px] ">
              <span className="font-semibold text-[20px]">Where:-</span>
              Ram Navami is celebrated with passion throughout India,
              particularly in Northern Indian states like Uttar Pradesh, Bihar,
              Rajasthan, and Madhya Pradesh where it is at its colorful best.
              <br />
              <span className=" font-semibold text-[17px]">Things To Do:-</span>
              Participate in prayers and other ceremonies in temples meant for
              Lord Rama.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ram;
