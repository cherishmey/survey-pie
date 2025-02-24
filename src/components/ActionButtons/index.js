function ActionButtons({ questionsLength, step }) {
    const isLast = questionsLength - 1 === step;

    return (
        <div>
            {step === 0 || <button>戻る</button>}
            {isLast ? <button>送信</button> : <button>次へ</button>}
        </div>
    );
}

export default ActionButtons;