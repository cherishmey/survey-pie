import { useNavigate } from "react-router-dom";

function ActionButtons({ questionsLength, step }) {
    const Navigate = useNavigate();
    const isLast = questionsLength - 1 === step;

    return (
        <div>
            {step === 0 || (<button onclick={() => {
                Navigate(`${step - 1}`);
            }}>戻る</button>)}
            {isLast ? (<button onClick={() => {
                Navigate("/complete");
            }}>
                送信
            </button>) : (<button onClick={() => {
                Navigate(`${step + 1}`);
            }}>次へ</button>
            )}
        </div>
    );
}

export default ActionButtons;