class V1::TasksController < ApplicationController
  # GET /api/v1/tasks
  def index
    tasks = Task.order(created_at: :desc)
    render json: { status: 'SUCCESS', message: 'Loaded tasks', data: tasks }, status: :ok
  end

  # GET /api/v1/tasks/:id
  def show
    task = Task.find(params[:id])
    render json: { status: 'SUCCESS', message: 'Loaded task', data: task }, status: :ok
  end

  # POST /api/v1/tasks
  def create
    task = Task.new(task_params)

    if task.save
      render json: { status: 'SUCCESS', message: 'Saved task', data: task }, status: :ok
    else
      render json: { status: 'ERROR', message: 'Task not saved', data: task.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/tasks/:id
  def destroy
    task = Task.find(params[:id])
    task.destroy
    render json: { status: 'SUCCESS', message: 'Deleted task', data: task }, status: :ok
  end

  # PATCH/PUT /api/v1/tasks/:id
  def update
    task = Task.find(params[:id])

    if task.update(task_params)
      render json: { status: 'SUCCESS', message: 'Updated task', data: task }, status: :ok
    else
      render json: { status: 'ERROR', message: 'Task not updated', data: task.errors }, status: :unprocessable_entity
    end
  end

  private

  def task_params
    # titleのみ許可（created_at, updated_atはRailsが自動管理するため通常は含めません）
    params.permit(:title)
  end
end