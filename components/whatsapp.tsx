"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <>
      <a
        href="https://wa.me/+5521972646121"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>

      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          width: 72px;
          height: 72px;
          bottom: 24px;
          right: 24px;

          background-color: #25d366;
          color: white;

          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 42px;

          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

          z-index: 1000;
          text-decoration: none;

          /* separa hover da animação */
          animation: pulse 1.8s infinite ease-in-out;

          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .whatsapp-float:hover {
          transform: scale(1.12);
          background-color: #20ba5a;
        }

        /* animação sem brigar com hover (usa box-shadow e não depende só de transform) */
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
          }

          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
          }

          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </>
  );
}