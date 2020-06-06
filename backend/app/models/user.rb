class User < ApplicationRecord
    has_many :cars, :dependent => :delete_all
end
