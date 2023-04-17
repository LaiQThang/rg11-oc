function Modal() {
    const handleSave = () => {
        console.log(123);
    };
    return (
        <div className="modal fade" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Tạo lớp học</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tên lớp học"
                                aria-label="Username"
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Môn học" aria-label="Username" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Mô tả" aria-label="Username" />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Số lượng sinh viên"
                                aria-label="Username"
                            />
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleSave}>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
