const JobForm =({setisshowform})=>{
    const handleapply=()=>{
        setisshowform(false)

    }
return(
    <>
    <div className="container-fluid">
        <div className="card p-3">
            <div className="row">
            <div className="col-sm-3">
                <label>Name</label>
                <input  className="form-control"></input>
            </div>
            <div className="col-sm-3">
            <label>Email</label>
            <input  className="form-control"></input>
            </div>
            <div className="col-sm-3">
            <label>Mobile No</label>
            <input  className="form-control"></input>
            </div>
            <div className="col-sm-3">
            <label>Address</label>
            <input  className="form-control"></input>
            </div>
            <div className="col-sm-3">
            <label>Role</label>
            <input  className="form-control"></input>
            </div>
            <div className="col-sm-3">
            <label>Experience</label>
                <input  className="form-control"></input>
                </div>
            <div className="col-sm-3">
            <label>Current ctc</label>
                <input  className="form-control"></input>
            </div>
            <div className="col-sm-3">
            <label>Expected ctc</label>
                <input  className="form-control"></input>
            </div>
        </div>
        <div className="col-sm-12 text-center">
            <button className="btn btn-danger mt-3" onClick={handleapply}>Apply</button>
        </div>
        </div>
        
    </div>
    </>
)
}
export default JobForm