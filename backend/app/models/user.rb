class User < ApplicationRecord
    has_many :cars
    validates :username, :uniqueness => true, :length => {:minimum => 3}
    validates :username, presence: true  
end
