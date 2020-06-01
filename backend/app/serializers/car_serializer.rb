class CarSerializer < ActiveModel::Serializer
    attributes :id, :year, :make, :model, :trim, :user_id
    belongs_to :user
end