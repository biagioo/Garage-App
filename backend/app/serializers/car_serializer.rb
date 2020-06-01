class CarSerializer < ActiveModel::Serializer
    attributes :id, :year, :make, :model, :trim 
    belongs_to :user
end