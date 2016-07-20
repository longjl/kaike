/**
 * Created by longjianlin on 7/20/16.
 */

/************科目************/
//添加科目弹层
function addSubjectModal() {
    $('.header').html('添加科目');
    $('#subject_id').val('');
    $('#subject_name').val('');
    $('#handleSubjectModal').modal('show');
}

//编辑科目弹层
function editSubjectModal(id, name) {
    $('.header').html('编辑科目');
    $('#subject_id').val(id);
    $('#subject_name').val(name);
    $('#handleSubjectModal').modal('show');
}

//删除科目弹层
function deleteSubjectModal(id) {
    $('#subject_id').val(id);
    $('#deleteSubjectModal').modal('show');
}

//添加或编辑科目
function handleSubject() {
    var id = $('#subject_id').val();
    var name = $('#subject_name').val();
    if (name == '' || name.trim().length == 0) {
        return;
    }
    var url = '';
    var data = {};

    if (id == '' || id.trim().length == 0) {
        url = '/admin/subject/add';
        data = {
            name : name
        };
    }else{
        url = '/admin/subject/edit';
        data = {
            id : id,
            name : name
        };
    }
    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        dataType: 'json',
        timeout: 1000,
        error: function () {
            console.log('handle subject error.')
        },
        success: function (data) {
            if (data.code === 200) {
                $('#handleSubjectModal').modal('hide');
                //刷新
                location.reload();
            }
            // console.log(data);
        }
    });
}

//删除科目
function deleteSubject() {
    var id = $('#subject_id').val();
    if (id == '' || id.trim().length == 0) {
        return;
    }
    $.ajax({
        url: '/admin/subject/delete',
        type: 'GET',
        data: {id:id},
        dataType: 'json',
        timeout: 1000,
        error: function () {
            console.log('handle error.')
        },
        success: function (data) {
            if (data.code === 200) {
                $('#deleteSubjectModal').modal('hide');
                //刷新
                location.reload();
            }
        }
    });
}

/************年级************/
//添加年级弹层
function addGradeModal() {
    $('.header').html('添加年级');
    $('#grade_id').val('');
    $('#grade_name').val('');
    $('#handleGradeModal').modal('show');
}
//编辑年级弹层
function editGradeModal(id, name) {
    $('.header').html('编辑年级');
    $('#grade_id').val(id);
    $('#grade_name').val(name);
    $('#handleGradeModal').modal('show');
}
//删除年级弹层
function deleteGradeModal(id) {
    $('#grade_id').val(id);
    $('#deleteGradeModal').modal('show');
}
//添加或编辑年级
function handleGrade() {
    var id = $('#grade_id').val();
    var name = $('#grade_name').val();
    if (name == '' || name.trim().length == 0) {
        return;
    }
    var url = '';
    var data = {};

    if (id == '' || id.trim().length == 0) {
        url = '/admin/grade/add';
        data = {
            name : name
        };
    }else{
        url = '/admin/grade/edit';
        data = {
            id : id,
            name : name
        };
    }
    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        dataType: 'json',
        timeout: 1000,
        error: function () {
            console.log('handle error.')
        },
        success: function (data) {
            if (data.code === 200) {
                $('#handleGradeModal').modal('hide');
                //刷新
                location.reload();
            }
            // console.log(data);
        }
    });
}

//删除科目
function deleteGrade() {
    var id = $('#grade_id').val();
    if (id == '' || id.trim().length == 0) {
        return;
    }
    $.ajax({
        url: '/admin/grade/delete',
        type: 'GET',
        data: {id:id},
        dataType: 'json',
        timeout: 1000,
        error: function () {
            console.log('handle error.')
        },
        success: function (data) {
            if (data.code === 200) {
                $('#deleteGradeModal').modal('hide');
                //刷新
                location.reload();
            }
        }
    });
}



